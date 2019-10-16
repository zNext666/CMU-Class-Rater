const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Review = db.Review

router.get('/:course_no',(req,res) => {
    Review.findAll({
      attributes : ['id','user','rate','comment','course_no','createdAt'],
      where: {
        course_no:req.params.course_no
      },order: sequelize.literal('createdAt DESC')
  
    }).then((data) => {
      res.json(data)
    })
  })
module.exports = router