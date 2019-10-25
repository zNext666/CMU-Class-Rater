const db = require('./models/index')
const express = require('express')
const bodyParser = require('body-parser');
const server = express()
const cors = require('cors')
const PORT = 8000
const routes = require('./routes/router')

// support parsing of application/json type post data
server.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors())

// console log all req
const logRequestStart = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`)
  console.log(`remoteAddress => ${req.connection.remoteAddress}`)
  next()
}
server.use(logRequestStart)
server.use('/api',routes)
server.listen(PORT,() => console.log(`CMU class rater server running on PORT ${PORT}!`))

