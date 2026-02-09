const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config()

// Import routes
const authRoutes = require('./routes/authRoute')
const pagesRoutes = require('./routes/pagesRoute')
const servicesRoutes = require('./routes/servicesRoute')
const tendersRoutes = require('./routes/tendersRoute')
const blogsRoutes = require('./routes/blogsRoute')
const enquiriesRoutes = require('./routes/enquiriesRoute')
const usersRoutes = require('./routes/usersRoute')
const settingsRoutes = require('./routes/settingsRoute')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// In-memory data store for mock data
const mockData = {
    admins: [
        {
            _id: '1',
            email: 'admin@example.com',
            password: 'admin123', // plain text for testing
            name: 'Admin User'
        }
    ],
    pages: [
        {
            _id: '1',
            pageName: 'home',
            title: 'Home',
            content: 'Welcome to our tender management system',
            metaTitle: 'Home - Tender Management System',
            metaDescription: 'Professional tender management services',
            enabled: true,
            order: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ],
    services: [
        {
            _id: '1',
            title: 'Tender Registration',
            slug: 'tender-registration',
            description: 'Complete tender registration process',
            content: 'Our tender registration service includes...',
            icon: '📄',
            price: '₹5,000',
            duration: '3-5 working days',
            features: ['Online registration', 'Document verification', 'Payment assistance'],
            enabled: true,
            metaTitle: 'Tender Registration Service',
            metaDescription: 'Complete tender registration process',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ],
    tenders: [
        {
            _id: '1',
            title: 'Office Supplies Tender',
            department: 'Ministry of Finance',
            state: 'Delhi',
            lastDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            description: 'Tender for office supplies in Delhi',
            whatsappNumber: '+91 9876543210',
            phoneNumber: '+91 9876543210',
            email: 'tender@example.com',
            enabled: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ],
    blogs: [
        {
            _id: '1',
            title: 'How to Win Tenders',
            category: 'Tender Tips',
            content: 'Winning tenders requires strategic planning and careful execution...',
            author: 'John Doe',
            date: new Date(),
            metaTitle: 'How to Win Tenders',
            metaDescription: 'Tips for winning tenders',
            enabled: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ],
    enquiries: [
        {
            _id: '1',
            name: 'John Doe',
            mobile: '9876543210',
            email: 'john@example.com',
            service: 'Tender Registration',
            message: 'I would like to register for a tender',
            createdAt: new Date()
        }
    ],
    users: [
        {
            _id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            mobile: '9876543210',
            createdAt: new Date()
        }
    ],
    payments: [],
    settings: {
        whatsappNumber: '+91 9876543210',
        phoneNumber: '+91 9876543210',
        email: 'info@example.com',
        tenderAccessEnabled: true
    }
}

// Attach mock data to app for use in routes
app.locals.mockData = mockData

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/pages', pagesRoutes)
app.use('/api/services', servicesRoutes)
app.use('/api/tenders', tendersRoutes)
app.use('/api/blogs', blogsRoutes)
app.use('/api/enquiries', enquiriesRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/settings', settingsRoutes)

// Serve static files from React build
const path = require('path')
app.use(express.static(path.join(__dirname, '../client/build')))

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})