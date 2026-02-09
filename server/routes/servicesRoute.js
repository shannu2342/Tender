const express = require('express');
const Service = require('../models/Service');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Get all services (public)
router.get('/', async (req, res) => {
    try {
        const { category, search, page = 1, limit = 10 } = req.query;
        const query = { isEnabled: true };

        if (category) {
            query.category = category;
        }

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { features: { $in: [new RegExp(search, 'i')] } }
            ];
        }

        const services = await Service.find(query)
            .sort({ order: 1, createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Service.countDocuments(query);

        res.json({
            success: true,
            data: services,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get services error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get service by slug (public)
router.get('/slug/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const service = await Service.findOne({ slug, isEnabled: true });

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found'
            });
        }

        // Increment views
        service.views += 1;
        await service.save();

        res.json({
            success: true,
            data: service
        });
    } catch (error) {
        console.error('Get service error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get all services including disabled ones (admin)
router.get('/admin/all', authenticateToken, async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const services = await Service.find()
            .sort({ order: 1, createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Service.countDocuments();

        res.json({
            success: true,
            data: services,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get all services error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Create service (admin)
router.post('/', authenticateToken, async (req, res) => {
    try {
        const {
            title,
            description,
            longDescription,
            features,
            benefits,
            process,
            price,
            priceDescription,
            category,
            icon,
            image,
            ctaButton,
            seo,
            isEnabled,
            order
        } = req.body;

        // Generate slug from title
        const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

        // Check if slug exists
        const existingService = await Service.findOne({ slug });
        if (existingService) {
            return res.status(400).json({
                success: false,
                message: 'Service with this title already exists'
            });
        }

        const service = new Service({
            title,
            slug,
            description,
            longDescription,
            features,
            benefits,
            process,
            price,
            priceDescription,
            category,
            icon,
            image,
            ctaButton,
            seo,
            isEnabled,
            order
        });

        await service.save();

        res.json({
            success: true,
            message: 'Service created successfully',
            data: service
        });
    } catch (error) {
        console.error('Create service error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Update service (admin)
router.put('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const {
            title,
            description,
            longDescription,
            features,
            benefits,
            process,
            price,
            priceDescription,
            category,
            icon,
            image,
            ctaButton,
            seo,
            isEnabled,
            order
        } = req.body;

        // Generate new slug if title changed
        let slug = req.body.slug;
        if (title && !slug) {
            slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        }

        const service = await Service.findByIdAndUpdate(
            id,
            {
                title,
                slug,
                description,
                longDescription,
                features,
                benefits,
                process,
                price,
                priceDescription,
                category,
                icon,
                image,
                ctaButton,
                seo,
                isEnabled,
                order
            },
            { new: true, runValidators: true }
        );

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found'
            });
        }

        res.json({
            success: true,
            message: 'Service updated successfully',
            data: service
        });
    } catch (error) {
        console.error('Update service error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Toggle service status (admin)
router.put('/:id/status', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { isEnabled } = req.body;

        const service = await Service.findByIdAndUpdate(
            id,
            { isEnabled },
            { new: true }
        );

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found'
            });
        }

        res.json({
            success: true,
            message: `Service ${isEnabled ? 'enabled' : 'disabled'} successfully`,
            data: service
        });
    } catch (error) {
        console.error('Toggle service status error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Delete service (admin) - soft delete
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;

        const service = await Service.findByIdAndUpdate(
            id,
            { isEnabled: false },
            { new: true }
        );

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found'
            });
        }

        res.json({
            success: true,
            message: 'Service disabled successfully',
            data: service
        });
    } catch (error) {
        console.error('Delete service error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get service categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Service.distinct('category', { isEnabled: true });

        res.json({
            success: true,
            data: categories
        });
    } catch (error) {
        console.error('Get categories error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

module.exports = router;