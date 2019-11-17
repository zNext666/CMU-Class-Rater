const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Course = db.Course
const Review = db.Review

router.get('',(req,res) => {
  var offset = 0
  if(req.query.page != null && req.query.page > 0){
    offset = req.query.page - 1
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
  

module.exports = router