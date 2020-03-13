const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Course = db.Course
const Review = db.Review

router.get('',(req,res) => {
  var offset = 0
  if(req.query.page != null && req.query.page > 0){
    offset = 9*(req.query.page - 1)
  }
    Course.findAndCountAll({
      attributes : ['course_no','name','section','teacher','description', 'credit','view'],
      offset: offset,
      limit: 9
    }).then((data) => {
      res.json(data)
    }).catch((error) => {
      console.log(error)
      res.status(500).send(error)
    })
  })

  router.get('/raw',(req,res)=>{
    var offset = 0
  if(req.query.page != null && req.query.page > 0){
    offset = 9*(req.query.page - 1)
  }
  if(req.query.sort == 'credit' && req.query.order != ''){//credit
    Course.findAndCountAll({
      attributes : ['course_no','name','section','teacher', 'credit','view'],
      offset: offset,
      limit: 9,
      order: db.sequelize.literal('credit '+req.query.order)
    }).then((data)=>{
      res.json(data)
    })
    }else if(req.query.sort == 'view'){
      Course.findAndCountAll({
        attributes : ['course_no','name','section','teacher', 'credit', 'view'],
        offset: offset,
        limit: 9,
        order: db.sequelize.literal('view DESC')
      }).then((data)=>{
        res.json(data)
      })
    }else{
    db.sequelize.query("SELECT ( SELECT COUNT(*) FROM Courses ) AS COUNT_ROWS, Courses.`course_no`, Courses.`credit`, Courses.`name`,Courses.`view`, Courses.`teacher`, Courses.`section`, Courses.`description`, AVG(Reviews.`rate`) AS `average` FROM Courses LEFT OUTER JOIN Reviews ON Courses.course_no = Reviews.course_no GROUP BY Courses.course_no ORDER BY average DESC LIMIT " + offset +", " + 9)
    .then(result => {
      res.json(result[0])
    })}
  })
  

module.exports = router
