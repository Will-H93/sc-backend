const express = require('express')
const staffRouter = require('../src/routes/staffRouter')
const statusRouter = require('../src/routes/statusRouter')
const teamRouter = require('../src/routes/teamRouter')

const app = express()

app.use(express.json())

app.use('/staff', staffRouter)
app.use('/status', statusRouter)
app.use('/teams', teamRouter)

module.exports = app