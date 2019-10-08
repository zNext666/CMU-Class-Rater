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
    attributes : ['id','course_no','name','section','teacher','description'],
    where: {
      course_no:req.params.course_no
    }
  }).then((data) => {
    console.log(data)
    res.json(data)
  })
})
server.get('/courses',(req,res) => {
  Course.findAll({
    attributes : ['id','course_no','name','section','teacher','description']
  }).then((data) => {
    console.log(data)
    res.json(data)
  })
})

server.get('/reviews/:course',(req,res) => {
  Review.findAll({
    attributes : ['id','user','rate','comment','createdAt']
  }).then((data) => {
    console.log(data)
    res.json(data)
  })
})

server.post('/review/:course',(req,res) => {
  return Review.create({
    user:req.body.user,
    rate:req.body.rate,
    comment:req.body.comment,
    course:req.params.course
  }).then((data)=>{
    console.log(data)
    res.json(data)
  })
})

server.listen(PORT,() => console.log(`CMU class rater server running on PORT ${PORT}!`))

