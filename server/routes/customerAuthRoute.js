const express = require('express');
const jwt = require('jsonwebtoken');
const customerAuth = require('../middleware/customerAuthMiddleware');

const router = express.Router();

const normalizeMobile = (value = '') => String(value).replace(/[^\d]/g, '').slice(-10);

router.post('/request-otp', (req, res) => {
    const { mobile } = req.body;
    const normalizedMobile = normalizeMobile(mobile);

    if (!normalizedMobile || normalizedMobile.length !== 10) {
        return res.status(400).json({ message: 'Enter a valid 10-digit mobile number' });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const requestId = `otp_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const expiresAt = Date.now() + 5 * 60 * 1000;

    req.app.locals.mockData.otpRequests[requestId] = {
        mobile: normalizedMobile,
        otp,
        expiresAt
    };

    const response = {
        requestId,
        message: 'OTP sent successfully',
        expiresInSeconds: 300
    };

    if (process.env.NODE_ENV !== 'production') {
        response.devOtp = otp;
    }

    return res.json(response);
});

router.post('/verify-otp', (req, res) => {
    const { requestId, otp, mobile, name = '' } = req.body;
    const normalizedMobile = normalizeMobile(mobile);
    const otpRequest = req.app.locals.mockData.otpRequests[requestId];

    if (!otpRequest) {
        return res.status(400).json({ message: 'OTP request expired. Please request a new OTP.' });
    }

    if (Date.now() > otpRequest.expiresAt) {
        delete req.app.locals.mockData.otpRequests[requestId];
        return res.status(400).json({ message: 'OTP has expired. Please request a new OTP.' });
    }

    if (otpRequest.mobile !== normalizedMobile) {
        return res.status(400).json({ message: 'Mobile number mismatch' });
    }

    if (String(otpRequest.otp) !== String(otp)) {
        return res.status(400).json({ message: 'Invalid OTP' });
    }

    delete req.app.locals.mockData.otpRequests[requestId];

    const users = req.app.locals.mockData.users;
    let user = users.find((item) => normalizeMobile(item.mobile) === normalizedMobile);

    if (!user) {
        user = {
            _id: Date.now().toString(),
            name: name.trim() || `User ${normalizedMobile.slice(-4)}`,
            email: '',
            mobile: normalizedMobile,
            role: 'user',
            isPremium: false,
            premiumActiveUntil: null,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        users.push(user);
    }

    user.lastLoginAt = new Date();
    user.updatedAt = new Date();

    const token = jwt.sign(
        { id: user._id, mobile: user.mobile, tokenType: 'customer' },
        process.env.JWT_SECRET || 'default_secret',
        { expiresIn: '30d' }
    );

    return res.json({
        token,
        user
    });
});

router.get('/me', customerAuth, (req, res) => {
    return res.json(req.customer);
});

router.post('/logout', customerAuth, (req, res) => {
    return res.json({ message: 'Logged out successfully' });
});

module.exports = router;
