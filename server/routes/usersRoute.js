const express = require('express');
const User = require('../models/User');
const Payment = require('../models/Payment');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Get all users (admin)
router.get('/', authenticateToken, async (req, res) => {
    try {
        const {
            role,
            isVerified,
            isActive,
            page = 1,
            limit = 10,
            search
        } = req.query;

        const query = {};

        if (role) {
            query.role = role;
        }

        if (isVerified !== undefined) {
            query.isVerified = isVerified === 'true';
        }

        if (isActive !== undefined) {
            query.isActive = isActive === 'true';
        }

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { phone: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { 'company.name': { $regex: search, $options: 'i' } }
            ];
        }

        const users = await User.find(query)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await User.countDocuments(query);

        // Add payment information to users
        const usersWithPaymentInfo = await Promise.all(
            users.map(async (user) => {
                const activePayment = await Payment.findOne({
                    userId: user._id,
                    paymentStatus: 'completed',
                    productType: 'tender-access',
                    endDate: { $gt: new Date() }
                }).sort({ endDate: -1 });

                return {
                    ...user.toObject(),
                    hasActiveTenderAccess: !!activePayment,
                    lastPaymentDate: activePayment ? activePayment.createdAt : null,
                    paymentExpiryDate: activePayment ? activePayment.endDate : null
                };
            })
        );

        res.json({
            success: true,
            data: usersWithPaymentInfo,
            pagination: {
                page: Number(page),
                limit: Number(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get user by ID (admin)
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Get payment history
        const payments = await Payment.find({
            userId: user._id
        }).sort({ createdAt: -1 });

        const userData = user.toObject();
        userData.payments = payments;

        res.json({
            success: true,
            data: userData
        });
    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Update user (admin)
router.put('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            email,
            phone,
            role,
            address,
            company,
            preferences,
            isVerified,
            isActive
        } = req.body;

        const updates = {
            name,
            email,
            phone,
            role,
            address,
            company,
            preferences,
            isVerified,
            isActive
        };

        // Remove undefined fields
        Object.keys(updates).forEach(key =>
            updates[key] === undefined && delete updates[key]
        );

        const user = await User.findByIdAndUpdate(
            id,
            updates,
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.json({
            success: true,
            message: 'User updated successfully',
            data: user
        });
    } catch (error) {
        console.error('Update user error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Toggle user status (admin)
router.put('/:id/status', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { isActive } = req.body;

        const user = await User.findByIdAndUpdate(
            id,
            { isActive },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.json({
            success: true,
            message: `User ${isActive ? 'activated' : 'deactivated'} successfully`,
            data: user
        });
    } catch (error) {
        console.error('Toggle user status error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Delete user (admin) - soft delete
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndUpdate(
            id,
            { isActive: false },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.json({
            success: true,
            message: 'User deactivated successfully',
            data: user
        });
    } catch (error) {
        console.error('Delete user error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get user statistics (admin)
router.get('/stats', authenticateToken, async (req, res) => {
    try {
        const total = await User.countDocuments({ isActive: true });
        const verified = await User.countDocuments({
            isActive: true,
            isVerified: true
        });
        const premium = await User.countDocuments({
            isActive: true,
            role: 'premium'
        });

        // Calculate active tender access users
        const activeTenderAccess = await Payment.countDocuments({
            paymentStatus: 'completed',
            productType: 'tender-access',
            endDate: { $gt: new Date() }
        });

        res.json({
            success: true,
            data: {
                total,
                verified,
                premium,
                activeTenderAccess
            }
        });
    } catch (error) {
        console.error('Get user stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get user activity report (admin)
router.get('/activity/report', authenticateToken, async (req, res) => {
    try {
        const { startDate, endDate } = req.query;

        const query = { isActive: true };
        if (startDate && endDate) {
            query.createdAt = {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            };
        }

        const users = await User.find(query).sort({ createdAt: -1 });

        const report = users.map(user => ({
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            registeredAt: user.createdAt.toLocaleDateString(),
            lastLogin: user.lastLogin ? user.lastLogin.toLocaleDateString() : 'Never',
            loginCount: user.loginCount
        }));

        res.json({
            success: true,
            data: report
        });
    } catch (error) {
        console.error('Get activity report error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Get user payment history (admin)
router.get('/:id/payments', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const payments = await Payment.find({
            userId: id
        }).sort({ createdAt: -1 });

        res.json({
            success: true,
            data: payments
        });
    } catch (error) {
        console.error('Get user payments error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

// Verify user email (admin)
router.put('/:id/verify', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndUpdate(
            id,
            { isVerified: true, verificationToken: null, verificationExpires: null },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.json({
            success: true,
            message: 'User verified successfully',
            data: user
        });
    } catch (error) {
        console.error('Verify user error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
            error: error.message
        });
    }
});

module.exports = router;