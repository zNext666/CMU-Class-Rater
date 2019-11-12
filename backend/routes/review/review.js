const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Review = db.Review

router.post('/:course',(req,res) => {
    return Review.create({
      rate:req.body.rate,
      comment:req.body.comment,
      course_no:req.body.course_no,
      user_id:req.body.user_id,
      course:req.params.course
    }).then((data)=>{
      res.json(data)
    })
})


module.exports = router