//Router and all related imports & exports has to be named accordingly

const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
//const exampleRouter = require('./controllers/exampleRouter')
const middlewares = require('./utils/middlewares')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

logger.info('connecting to mongoDB',)

mongoose.connect(config.MONGODB_URI)
.then(() => {
    logger.info('connected to mongoDB')
})
.catch(error => {
    logger.error('error connecting to MongoDB ', error.message)
})

app.use(cors())
//app.use(express.static('build')) //<--front build index
app.use(express.json())
app.use(middlewares.requestLogger)

//app.use('/api/test', exampleRouter) //<--router

app.use(middlewares.unknownEndpoint)
app.use(middlewares.errorHandler)

module.exports = app