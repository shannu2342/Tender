const express = require('express');
const Enquiry = require('../models/Enquiry');
const { authenticateToken } = require('../middleware/authMiddleware');
const { createObjectCsvWriter } = require('csv-writer');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Create enquiry (public)
router.post('/', async (req, res) => {
    try {
        const {
            name,
            phone,
            email,
            serviceType,
            tenderId,
            serviceId,
            subject,
            message
        } = req.body;

        const enquiry = new Enquiry({
            name,
            phone,
            email,
            serviceType,
            tenderId,
            serviceId,
            subject,
            message,
            ipAddress: req.ip,
            userAgent: req.get('User-Agent')
        });

        await enquiry.save();

        // Increment enquiry count for service or tender
        if (serviceId) {
            const Service = require('../models/Service');
            await Service.findByIdAndUpdate(serviceId, {
                $inc: { enquiryCount: 1 }
            });
        }

        if (tenderId) {
            const Tender = require('../models/Tender');
            await Tender.findByIdAndUpdate(tenderId, {
                $inc: { enquiryCount: 1 }
            });
        }

        res.json({
            success: true,
            message: 'Enquiry submitted successfully. We will contact you soon.',
            data: enquiry
        });
    } catch (error) {
        console.error('Create enquiry error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get all enquiries (admin)
router.get('/', authenticateToken, async (req, res) => {
    try {
        const {
            status,
            serviceType,
            assignedTo,
            page = 1,
            limit = 10,
            search
        } = req.query;

        const query = {};

        if (status) {
            query.status = status;
        }

        if (serviceType) {
            query.serviceType = serviceType;
        }

        if (assignedTo) {
            query.assignedTo = assignedTo;
        }

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { phone: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { subject: { $regex: search, $options: 'i' } },
                { message: { $regex: search, $options: 'i' } }
            ];
        }

        const enquiries = await Enquiry.find(query)
            .populate('tenderId', 'title')
            .populate('serviceId', 'title')
            .populate('assignedTo', 'name email')
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Enquiry.countDocuments(query);

        res.json({
            success: true,
            data: enquiries,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get enquiries error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get enquiry by ID (admin)
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const enquiry = await Enquiry.findById(id)
            .populate('tenderId', 'title')
            .populate('serviceId', 'title')
            .populate('assignedTo', 'name email');

        if (!enquiry) {
            return res.status(404).json({
                success: false,
                message: 'Enquiry not found'
            });
        }

        res.json({
            success: true,
            data: enquiry
        });
    } catch (error) {
        console.error('Get enquiry error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Update enquiry status (admin)
router.put('/:id/status', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { status, assignedTo, followUpDate } = req.body;

        const updates = { status };
        if (assignedTo) updates.assignedTo = assignedTo;
        if (followUpDate) updates.followUpDate = followUpDate;

        const enquiry = await Enquiry.findByIdAndUpdate(
            id,
            updates,
            { new: true }
        ).populate('assignedTo', 'name email');

        if (!enquiry) {
            return res.status(404).json({
                success: false,
                message: 'Enquiry not found'
            });
        }

        res.json({
            success: true,
            message: 'Enquiry status updated successfully',
            data: enquiry
        });
    } catch (error) {
        console.error('Update enquiry status error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Add note to enquiry (admin)
router.post('/:id/notes', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;

        const enquiry = await Enquiry.findById(id);

        if (!enquiry) {
            return res.status(404).json({
                success: false,
                message: 'Enquiry not found'
            });
        }

        enquiry.notes.push({
            text,
            createdBy: req.admin._id
        });

        await enquiry.save();

        res.json({
            success: true,
            message: 'Note added successfully',
            data: enquiry.notes[enquiry.notes.length - 1]
        });
    } catch (error) {
        console.error('Add note error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Delete enquiry (admin)
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const enquiry = await Enquiry.findByIdAndDelete(id);

        if (!enquiry) {
            return res.status(404).json({
                success: false,
                message: 'Enquiry not found'
            });
        }

        res.json({
            success: true,
            message: 'Enquiry deleted successfully'
        });
    } catch (error) {
        console.error('Delete enquiry error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Export enquiries to CSV (admin)
router.get('/export/csv', authenticateToken, async (req, res) => {
    try {
        const { status, serviceType } = req.query;

        const query = {};
        if (status) query.status = status;
        if (serviceType) query.serviceType = serviceType;

        const enquiries = await Enquiry.find(query)
            .populate('tenderId', 'title')
            .populate('serviceId', 'title')
            .populate('assignedTo', 'name email')
            .sort({ createdAt: -1 });

        // Prepare CSV data
        const csvData = enquiries.map(enquiry => ({
            'Date': new Date(enquiry.createdAt).toLocaleString(),
            'Name': enquiry.name,
            'Phone': enquiry.phone,
            'Email': enquiry.email,
            'Service Type': enquiry.serviceType || 'General',
            'Subject': enquiry.subject || 'General Enquiry',
            'Message': enquiry.message,
            'Status': enquiry.status,
            'Assigned To': enquiry.assignedTo ? enquiry.assignedTo.name : 'Unassigned',
            'Tender': enquiry.tenderId ? enquiry.tenderId.title : '',
            'Service': enquiry.serviceId ? enquiry.serviceId.title : ''
        }));

        // Create CSV file
        const csvWriter = createObjectCsvWriter({
            path: path.join(__dirname, '../exports/enquiries.csv'),
            header: [
                { id: 'Date', title: 'Date' },
                { id: 'Name', title: 'Name' },
                { id: 'Phone', title: 'Phone' },
                { id: 'Email', title: 'Email' },
                { id: 'Service Type', title: 'Service Type' },
                { id: 'Subject', title: 'Subject' },
                { id: 'Message', title: 'Message' },
                { id: 'Status', title: 'Status' },
                { id: 'Assigned To', title: 'Assigned To' },
                { id: 'Tender', title: 'Tender' },
                { id: 'Service', title: 'Service' }
            ]
        });

        await csvWriter.writeRecords(csvData);

        // Send file as response
        res.download(path.join(__dirname, '../exports/enquiries.csv'), 'enquiries.csv', (err) => {
            if (err) {
                console.error('Download error:', err);
                res.status(500).json({
                    success: false,
                    message: 'Error downloading CSV file'
                });
            }

            // Delete the temporary file
            fs.unlinkSync(path.join(__dirname, '../exports/enquiries.csv'));
        });
    } catch (error) {
        console.error('Export enquiries error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get enquiry statistics (admin)
router.get('/stats', authenticateToken, async (req, res) => {
    try {
        const total = await Enquiry.countDocuments();
        const pending = await Enquiry.countDocuments({ status: 'pending' });
        const contacted = await Enquiry.countDocuments({ status: 'contacted' });
        const quoted = await Enquiry.countDocuments({ status: 'quoted' });
        const converted = await Enquiry.countDocuments({ status: 'converted' });
        const rejected = await Enquiry.countDocuments({ status: 'rejected' });

        res.json({
            success: true,
            data: {
                total,
                pending,
                contacted,
                quoted,
                converted,
                rejected
            }
        });
    } catch (error) {
        console.error('Get enquiry stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

module.exports = router;