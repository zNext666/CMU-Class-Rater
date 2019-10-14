const db = require('./models/index')
const express = require('express')
const bodyParser = require('body-parser');
const server = express()
const cors = require('cors')
const PORT = 8000
const sequelize = db.Sequelize
const Course = db.Course
const Review = db.Review


// support parsing of application/json type post data
server.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors())


server.get('/course/:course_no',(req,res) => {
  Course.findOne({
    attributes : ['course_no','name','section','teacher','description'],
    where: {
      course_no:req.params.course_no
    }
  }).then((data) => {
    res.json(data)
  })
})
server.get('/courses',(req,res) => {
  Course.findAll({
    attributes : ['course_no','name','section','teacher','description']
  }).then((data) => {
    res.json(data)
  })
})

server.get('/reviews/:course_no',(req,res) => {
  Review.findAll({
    attributes : ['id','user','rate','comment','course_no','createdAt'],
    where: {
      course_no:req.params.course_no
    },order: sequelize.literal('createdAt DESC')

  }).then((data) => {
    res.json(data)
  })
})

server.post('/review/:course',(req,res) => {
  return Review.create({
    user:req.body.user,
    rate:req.body.rate,
    comment:req.body.comment,
    course_no:req.body.course_no,
    course:req.params.course
  }).then((data)=>{
    res.json(data)
  })
})

// console log all req
const logRequestStart = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`)
  console.log(`remoteAddress => ${req.connection.remoteAddress}`)
  next()
}
server.use(logRequestStart)

server.listen(PORT,() => console.log(`CMU class rater server running on PORT ${PORT}!`))

