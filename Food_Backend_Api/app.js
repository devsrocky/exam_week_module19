const express = require('express')
const router = require('./src/route/api')
const app = express()

// BASIC IMPORT
const cors = require('cors')
const hpp = require('hpp')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const mongoose = require('mongoose')


// SECURITY MIDDLEWRE IMPLEMENTATION
app.use(cors())
app.use(hpp())
app.use(helmet())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: true}))


// APPLICATION BROWSING LIMIT SPECIFIED
const limit = rateLimit({windowMs: 15 * 60 * 1000, max: 100})
app.use(limit)


// DATABASE CONNECTION
// const URL = 'mongodb://localhost:27017/Resturante';
// const OPTION = {user: '', pass: '', autoIndex: true};
// mongoose.connect(URL, OPTION).then((res) => {
//     console.log('MongoDB connected')
// }).catch((err) => {
//     console.log('MongoDB connection failed')
// })

mongoose.connect("mongodb+srv://prodhanr:prodhanr72@cluster0.cy3xqek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((res) => {
    console.log('MongoDB connected')
}).catch((err) => {
    console.log('MongoDB connection')
})



// USE ROUTER
app.use('/api', router)



// 404 PAGE NOT FOUND
app.get('*', (req, res) => {
    res.send('404 PAGE NOT FOUND')
})


// EXPORT APP
module.exports = app;