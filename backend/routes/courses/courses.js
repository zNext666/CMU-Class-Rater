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
  console.log('page: ' + req.query.page)
    Course.findAndCountAll({
      attributes : ['course_no','name','section','teacher','description'],
      offset: offset,
      limit: 9
    }).then((data) => {
      res.json(data)
    }).catch((error) => {
      res.status(500)
    })
  })

  router.get('/test',(req,res)=>{
    return db.sequelize.query('SELECT AVG(reviews.rate) AS average, courses.course_no FROM courses LEFT JOIN reviews ON courses.course_no = reviews.course_no GROUP BY courses.course_no').then((data)=>{
      res.json(data[0])
    })
  })
  

module.exports = router