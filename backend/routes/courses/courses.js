const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Course = db.Course

router.get('',(req,res) => {
    Course.findAll({
      attributes : ['course_no','name','section','teacher','description']
    }).then((data) => {
      res.json(data)
    })
  })
  

module.exports = router