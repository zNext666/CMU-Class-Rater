const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Course = db.Course
const Review = db.Review

router.get('',(req,res) => {
    Course.findAll({
      include: [
        { 
          required: true,
          model: Review,
          attributes: ['course_no',[db.sequelize.fn('avg', db.sequelize.col('rate')), 'average']]
        }
     ],
      attributes : ['course_no','name','section','teacher','description'],
      group: ['course_no']
    }).then((data) => {
      res.json(data)
    }).catch((error) => {
      res.status(500)
    })
  })
  

module.exports = router