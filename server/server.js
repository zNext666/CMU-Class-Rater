const db = require('./models/index')
const express = require('express')
const server = express()
const PORT = 8000
const sequelize = db.Sequelize
const Course = db.Course
const Review = db.Review

server.get('/courses',(req,res) => {
  Course.findAll({
    attributes : ['course_no','name','section','teacher','description']
  }).then((data) => {
    res.send(data)
  })
})

server.get('/reviews',(req,res) => {

})
server.listen(PORT,() => console.log(`CMU class rater server running on PORT ${PORT}!`))

