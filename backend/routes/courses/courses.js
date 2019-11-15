const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Course = db.Course
const Review = db.Review

router.get('',(req,res) => {
    Course.findAll({
      attributes : [['course_no','id'],'name','section','teacher','description']
    }).then((data) => {
      res.json(data)
    }).catch((error) => {
      res.status(500)
    })
  })
  

module.exports = router