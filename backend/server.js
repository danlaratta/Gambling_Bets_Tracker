const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(express.urlencoded({extended: false}))

mongoose.connect(process.env.MONGODB, () => {
    console.log('MongoDB connected')
})

app.use('/api/bets', require('./routes/betRoutes'))
app.use('/api/stats', require('./routes/statsRoutes'))

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})