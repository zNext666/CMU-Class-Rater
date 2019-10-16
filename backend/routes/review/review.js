const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Review = db.Review
router.post('/review/:course',(req,res) => {
    return Review.create({
      user:req.body.user,
      rate:req.body.rate,
      comment:req.body.comment,
      course_no:req.body.course_no,
      course:req.params.course
    }).then((data)=>{
      res.json(data)
    })
})


module.exports = router