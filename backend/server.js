const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

mongoose.connect(process.env.MONGODB, () => {
    console.log('MongoDB connected')
})

app.use('/api/bets', require('./routes/betRoutes'))

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})