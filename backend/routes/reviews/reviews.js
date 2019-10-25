const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Review = db.Review
const Op = db.Sequelize.Op

router.get('/:course_no',(req,res) => {
    Review.findAll({
      attributes : ['id','user','rate','comment','course_no','createdAt'],
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
  var arr = []
  // define rate
  arr[0] = 0
  arr[1] = 0
  arr[2] = 0
  arr[3] = 0
  arr[4] = 0
  arr[5] = 0

    Review.findAll({
      attributes:['course_no','rate'],
      where:{
      course_no:req.params.course_no
    }
    }).then((data)=>{
      console.log(data[0].course_no)
      for(i=0;i<data.length;i++){
        console.log(data[i].rate + ' is Number :  ' + isNaN(Number(data[i].rate)).toString() + ' typeof :' + typeof(data[i].rate))
        
      }
    })
    res.json(arr)
})
  
module.exports = router