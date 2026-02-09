const express = require('express');
const Blog = require('../models/Blog');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Get blogs (public)
router.get('/', async (req, res) => {
    try {
        const {
            category,
            search,
            tag,
            featured,
            page = 1,
            limit = 10
        } = req.query;

        const query = { isPublished: true };

        if (category) {
            query.category = category;
        }

        if (tag) {
            query.tags = tag;
        }

        if (featured) {
            query.isFeatured = true;
        }

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { excerpt: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
                { tags: { $in: [new RegExp(search, 'i')] } }
            ];
        }

        const blogs = await Blog.find(query)
            .sort({ isFeatured: -1, publishedAt: -1, createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Blog.countDocuments(query);

        res.json({
            success: true,
            data: blogs,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get blogs error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get blog by slug (public)
router.get('/slug/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const blog = await Blog.findOne({ slug, isPublished: true });

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found'
            });
        }

        // Increment views
        blog.views += 1;
        await blog.save();

        res.json({
            success: true,
            data: blog
        });
    } catch (error) {
        console.error('Get blog error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get all blogs (admin)
router.get('/admin/all', authenticateToken, async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const blogs = await Blog.find()
            .sort({ isPublished: -1, publishedAt: -1, createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Blog.countDocuments();

        res.json({
            success: true,
            data: blogs,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get all blogs error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Create blog (admin)
router.post('/', authenticateToken, async (req, res) => {
    try {
        const {
            title,
            excerpt,
            content,
            author,
            category,
            tags,
            coverImage,
            featuredImage,
            readTime,
            seo,
            isFeatured,
            isPublished,
            publishedAt
        } = req.body;

        // Generate slug from title
        const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

        // Check if slug exists
        const existingBlog = await Blog.findOne({ slug });
        if (existingBlog) {
            return res.status(400).json({
                success: false,
                message: 'Blog with this title already exists'
            });
        }

        const blog = new Blog({
            title,
            slug,
            excerpt,
            content,
            author,
            category,
            tags,
            coverImage,
            featuredImage,
            readTime,
            seo,
            isFeatured,
            isPublished,
            publishedAt: publishedAt || new Date()
        });

        await blog.save();

        res.json({
            success: true,
            message: 'Blog created successfully',
            data: blog
        });
    } catch (error) {
        console.error('Create blog error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Update blog (admin)
router.put('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const {
            title,
            excerpt,
            content,
            author,
            category,
            tags,
            coverImage,
            featuredImage,
            readTime,
            seo,
            isFeatured,
            isPublished,
            publishedAt
        } = req.body;

        // Generate new slug if title changed
        let slug = req.body.slug;
        if (title && !slug) {
            slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        }

        const blog = await Blog.findByIdAndUpdate(
            id,
            {
                title,
                slug,
                excerpt,
                content,
                author,
                category,
                tags,
                coverImage,
                featuredImage,
                readTime,
                seo,
                isFeatured,
                isPublished,
                publishedAt: publishedAt || new Date()
            },
            { new: true, runValidators: true }
        );

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found'
            });
        }

        res.json({
            success: true,
            message: 'Blog updated successfully',
            data: blog
        });
    } catch (error) {
        console.error('Update blog error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Toggle blog status (admin)
router.put('/:id/status', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { isPublished, isFeatured } = req.body;

        const updates = {};
        if (isPublished !== undefined) updates.isPublished = isPublished;
        if (isFeatured !== undefined) updates.isFeatured = isFeatured;

        const blog = await Blog.findByIdAndUpdate(id, updates, { new: true });

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found'
            });
        }

        res.json({
            success: true,
            message: 'Blog status updated successfully',
            data: blog
        });
    } catch (error) {
        console.error('Toggle blog status error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Delete blog (admin) - soft delete
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findByIdAndUpdate(
            id,
            { isPublished: false },
            { new: true }
        );

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found'
            });
        }

        res.json({
            success: true,
            message: 'Blog unpublished successfully',
            data: blog
        });
    } catch (error) {
        console.error('Delete blog error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Add comment to blog (public)
router.post('/:id/comments', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, content } = req.body;

        const blog = await Blog.findById(id);

        if (!blog || !blog.isPublished) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found'
            });
        }

        blog.comments.push({
            name,
            email,
            content
        });

        await blog.save();

        res.json({
            success: true,
            message: 'Comment added successfully',
            data: blog.comments[blog.comments.length - 1]
        });
    } catch (error) {
        console.error('Add comment error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get blog categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Blog.distinct('category', { isPublished: true });

        res.json({
            success: true,
            data: categories
        });
    } catch (error) {
        console.error('Get blog categories error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get blog tags
router.get('/tags', async (req, res) => {
    try {
        const tags = await Blog.distinct('tags', { isPublished: true });

        res.json({
            success: true,
            data: tags
        });
    } catch (error) {
        console.error('Get blog tags error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

module.exports = router;