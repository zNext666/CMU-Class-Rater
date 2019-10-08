const express = require('express')
const listEndpoints = require('express-list-endpoints')
const app = express()
const port = 8000;

// run express
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.listen(port, () => console.log(`CMU-Class-Rater API listening on port ${port}!`))

// Maping Routes
app.use(require('./routes/index'))
console.log(listEndpoints(app));

// log to console
app.use('/',function(req, res, next){
    console.log("A new request received at " + Date.now())
    next()
 });
 