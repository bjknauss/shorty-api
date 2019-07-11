const express = require('express')
const app = express()

app.use(express.json())

app.use('/shorts', require('./routes/shorts'))

module.exports = app
