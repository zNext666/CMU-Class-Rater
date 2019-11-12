const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Review = db.Review
const User = db.User
const Op = db.Sequelize.Op

router.get('/:course_no',(req,res) => {
    Review.findAll({
      attributes : ['id','user_id','rate','comment','course_no','createdAt'],
      where: {
        course_no:req.params.course_no
      },order: db.sequelize.literal('createdAt DESC')
  
    }).then((data) => {
      res.json(data)
    })
  })

router.get('/:course_no/summary/average',(req,res) => {
    Review.findOne({
      attributes: ['course_no',[db.sequelize.fn('avg', db.sequelize.col('rate')), 'average']],
      where:{
        course_no:req.params.course_no
      }
    }).then((data)=>{
      res.json(data)
    })
})

router.get('/:course_no/summary',(req,res)=>{
    Review.findAll({
      group: ['rate'],
      attributes: ['rate',[db.sequelize.fn('COUNT', 'rate'), 'count']],
      where:{
      course_no:req.params.course_no
    }
    }).then((data)=>{
      res.json(data)
    })
})
  
module.exports = router