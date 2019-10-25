const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Course = db.Course
router.get('/:course_no',(req,res) => {
    Course.findOne({
      attributes : ['course_no','name','section','teacher','description'],
      where: {
        course_no:req.params.course_no
      }
    }).then((data) => {
      res.json(data)
    })
  })

module.exports = router