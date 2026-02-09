const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()

// Import routes
const authRoutes = require('./routes/authRoute')
const pagesRoutes = require('./routes/pagesRoute')
const servicesRoutes = require('./routes/servicesRoute')
const tendersRoutes = require('./routes/tendersRoute')
const blogsRoutes = require('./routes/blogsRoute')
const enquiriesRoutes = require('./routes/enquiriesRoute')
const usersRoutes = require('./routes/usersRoute')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Database connection
connectDB()

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/pages', pagesRoutes)
app.use('/api/services', servicesRoutes)
app.use('/api/tenders', tendersRoutes)
app.use('/api/blogs', blogsRoutes)
app.use('/api/enquiries', enquiriesRoutes)
app.use('/api/users', usersRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})