const express = require('express');
const Tender = require('../models/Tender');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Get tenders (public)
router.get('/', async (req, res) => {
    try {
        const {
            governmentType,
            state,
            district,
            category,
            search,
            status,
            page = 1,
            limit = 10
        } = req.query;

        const query = { isEnabled: true };

        if (governmentType) {
            query.governmentType = governmentType;
        }

        if (state) {
            query.state = state;
        }

        if (district) {
            query.district = district;
        }

        if (category) {
            query.category = category;
        }

        if (status) {
            query.status = status;
        }

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { department: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        // For public view, limit to latest 5 if paid access is required
        const tenders = await Tender.find(query)
            .sort({ isFeatured: -1, lastDate: 1, createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Tender.countDocuments(query);

        // For public response, show limited data if isPaidContent is true
        const publicTenders = tenders.map(tender => {
            const tenderData = tender.toObject();
            if (tender.isPaidContent) {
                // Return limited information for paid tenders
                return {
                    _id: tenderData._id,
                    title: tenderData.title,
                    department: tenderData.department,
                    governmentType: tenderData.governmentType,
                    state: tenderData.state,
                    lastDate: tenderData.lastDate,
                    category: tenderData.category,
                    status: tenderData.status,
                    isPaidContent: true,
                    isFeatured: tenderData.isFeatured,
                    createdAt: tenderData.createdAt
                };
            }
            return tenderData;
        });

        res.json({
            success: true,
            data: publicTenders,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get tenders error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get tender by ID (public)
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const tender = await Tender.findById(id);

        if (!tender || !tender.isEnabled) {
            return res.status(404).json({
                success: false,
                message: 'Tender not found'
            });
        }

        // Increment views
        tender.views += 1;
        await tender.save();

        // Return limited data if it's a paid tender
        const tenderData = tender.toObject();
        if (tender.isPaidContent) {
            return res.json({
                success: true,
                data: {
                    _id: tenderData._id,
                    title: tenderData.title,
                    department: tenderData.department,
                    governmentType: tenderData.governmentType,
                    state: tenderData.state,
                    district: tenderData.district,
                    lastDate: tenderData.lastDate,
                    status: tenderData.status,
                    category: tenderData.category,
                    estimatedValue: tenderData.estimatedValue,
                    currency: tenderData.currency,
                    isPaidContent: true,
                    isFeatured: tenderData.isFeatured,
                    description: tenderData.description,
                    createdAt: tenderData.createdAt
                }
            });
        }

        res.json({
            success: true,
            data: tenderData
        });
    } catch (error) {
        console.error('Get tender error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get all tenders (admin)
router.get('/admin/all', authenticateToken, async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const tenders = await Tender.find()
            .sort({ isFeatured: -1, lastDate: 1, createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Tender.countDocuments();

        res.json({
            success: true,
            data: tenders,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get all tenders error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Create tender (admin)
router.post('/', authenticateToken, async (req, res) => {
    try {
        const {
            title,
            department,
            governmentType,
            state,
            district,
            tenderNumber,
            description,
            details,
            eligibilityCriteria,
            documentsRequired,
            startDate,
            lastDate,
            openingDate,
            status,
            category,
            estimatedValue,
            currency,
            contact,
            location,
            documents,
            tags,
            seo,
            isFeatured,
            isEnabled,
            isPaidContent
        } = req.body;

        const tender = new Tender({
            title,
            department,
            governmentType,
            state,
            district,
            tenderNumber,
            description,
            details,
            eligibilityCriteria,
            documentsRequired,
            startDate,
            lastDate,
            openingDate,
            status,
            category,
            estimatedValue,
            currency,
            contact,
            location,
            documents,
            tags,
            seo,
            isFeatured,
            isEnabled,
            isPaidContent
        });

        await tender.save();

        res.json({
            success: true,
            message: 'Tender created successfully',
            data: tender
        });
    } catch (error) {
        console.error('Create tender error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Update tender (admin)
router.put('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const {
            title,
            department,
            governmentType,
            state,
            district,
            tenderNumber,
            description,
            details,
            eligibilityCriteria,
            documentsRequired,
            startDate,
            lastDate,
            openingDate,
            status,
            category,
            estimatedValue,
            currency,
            contact,
            location,
            documents,
            tags,
            seo,
            isFeatured,
            isEnabled,
            isPaidContent
        } = req.body;

        const tender = await Tender.findByIdAndUpdate(
            id,
            {
                title,
                department,
                governmentType,
                state,
                district,
                tenderNumber,
                description,
                details,
                eligibilityCriteria,
                documentsRequired,
                startDate,
                lastDate,
                openingDate,
                status,
                category,
                estimatedValue,
                currency,
                contact,
                location,
                documents,
                tags,
                seo,
                isFeatured,
                isEnabled,
                isPaidContent
            },
            { new: true, runValidators: true }
        );

        if (!tender) {
            return res.status(404).json({
                success: false,
                message: 'Tender not found'
            });
        }

        res.json({
            success: true,
            message: 'Tender updated successfully',
            data: tender
        });
    } catch (error) {
        console.error('Update tender error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Toggle tender status (admin)
router.put('/:id/status', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { isEnabled, status } = req.body;

        const updates = {};
        if (isEnabled !== undefined) updates.isEnabled = isEnabled;
        if (status) updates.status = status;

        const tender = await Tender.findByIdAndUpdate(id, updates, { new: true });

        if (!tender) {
            return res.status(404).json({
                success: false,
                message: 'Tender not found'
            });
        }

        res.json({
            success: true,
            message: 'Tender status updated successfully',
            data: tender
        });
    } catch (error) {
        console.error('Toggle tender status error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Delete tender (admin) - soft delete
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;

        const tender = await Tender.findByIdAndUpdate(
            id,
            { isEnabled: false },
            { new: true }
        );

        if (!tender) {
            return res.status(404).json({
                success: false,
                message: 'Tender not found'
            });
        }

        res.json({
            success: true,
            message: 'Tender disabled successfully',
            data: tender
        });
    } catch (error) {
        console.error('Delete tender error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get tender statistics (admin)
router.get('/admin/stats', authenticateToken, async (req, res) => {
    try {
        const total = await Tender.countDocuments({ isEnabled: true });
        const active = await Tender.countDocuments({
            isEnabled: true,
            status: 'active',
            lastDate: { $gt: new Date() }
        });
        const closed = await Tender.countDocuments({
            isEnabled: true,
            status: 'closed'
        });
        const cancelled = await Tender.countDocuments({
            isEnabled: true,
            status: 'cancelled'
        });
        const paid = await Tender.countDocuments({
            isEnabled: true,
            isPaidContent: true
        });

        res.json({
            success: true,
            data: {
                total,
                active,
                closed,
                cancelled,
                paid
            }
        });
    } catch (error) {
        console.error('Get tender stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get tender categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Tender.distinct('category', { isEnabled: true });

        res.json({
            success: true,
            data: categories
        });
    } catch (error) {
        console.error('Get tender categories error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get states with tenders
router.get('/states', async (req, res) => {
    try {
        const states = await Tender.distinct('state', { isEnabled: true });

        res.json({
            success: true,
            data: states
        });
    } catch (error) {
        console.error('Get states error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

module.exports = router;