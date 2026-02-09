const express = require('express');
const Page = require('../models/Page');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Get all pages (public)
router.get('/', async (req, res) => {
    try {
        const pages = await Page.find({ isEnabled: true });

        res.json({
            success: true,
            data: pages
        });
    } catch (error) {
        console.error('Get pages error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get page by type (public)
router.get('/:pageType', async (req, res) => {
    try {
        const { pageType } = req.params;
        const page = await Page.findOne({ pageType, isEnabled: true });

        if (!page) {
            return res.status(404).json({
                success: false,
                message: 'Page not found'
            });
        }

        res.json({
            success: true,
            data: page
        });
    } catch (error) {
        console.error('Get page error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get all pages including disabled ones (admin)
router.get('/admin/all', authenticateToken, async (req, res) => {
    try {
        const pages = await Page.find();

        res.json({
            success: true,
            data: pages
        });
    } catch (error) {
        console.error('Get all pages error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Create or update page (admin)
router.post('/', authenticateToken, async (req, res) => {
    try {
        const { pageType, title, content, sections, seo, isEnabled } = req.body;

        let page = await Page.findOne({ pageType });

        if (page) {
            // Update existing page
            page.title = title;
            page.content = content;
            page.sections = sections;
            page.seo = seo;
            page.isEnabled = isEnabled;
        } else {
            // Create new page
            page = new Page({
                pageType,
                title,
                content,
                sections,
                seo,
                isEnabled
            });
        }

        await page.save();

        res.json({
            success: true,
            message: 'Page saved successfully',
            data: page
        });
    } catch (error) {
        console.error('Save page error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Update page (admin)
router.put('/:pageType', authenticateToken, async (req, res) => {
    try {
        const { pageType } = req.params;
        const { title, content, sections, seo, isEnabled } = req.body;

        const page = await Page.findOneAndUpdate(
            { pageType },
            { title, content, sections, seo, isEnabled },
            { new: true, runValidators: true }
        );

        if (!page) {
            return res.status(404).json({
                success: false,
                message: 'Page not found'
            });
        }

        res.json({
            success: true,
            message: 'Page updated successfully',
            data: page
        });
    } catch (error) {
        console.error('Update page error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Toggle page status (admin)
router.put('/:pageType/status', authenticateToken, async (req, res) => {
    try {
        const { pageType } = req.params;
        const { isEnabled } = req.body;

        const page = await Page.findOneAndUpdate(
            { pageType },
            { isEnabled },
            { new: true }
        );

        if (!page) {
            return res.status(404).json({
                success: false,
                message: 'Page not found'
            });
        }

        res.json({
            success: true,
            message: `Page ${isEnabled ? 'enabled' : 'disabled'} successfully`,
            data: page
        });
    } catch (error) {
        console.error('Toggle page status error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Delete page (admin) - soft delete by disabling
router.delete('/:pageType', authenticateToken, async (req, res) => {
    try {
        const { pageType } = req.params;

        const page = await Page.findOneAndUpdate(
            { pageType },
            { isEnabled: false },
            { new: true }
        );

        if (!page) {
            return res.status(404).json({
                success: false,
                message: 'Page not found'
            });
        }

        res.json({
            success: true,
            message: 'Page disabled successfully',
            data: page
        });
    } catch (error) {
        console.error('Delete page error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

module.exports = router;