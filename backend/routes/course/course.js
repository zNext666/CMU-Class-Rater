const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Course = db.Course
const Op = db.Sequelize.Op
router.get('/search',(req,res) => {
    var search = req.query.search
    console.log(Number(search))
    if(isNaN(Number(search))){
        Course.findAll({
            attributes : ['course_no','name','section','teacher'],
            where: {
                name: {
                    [Op.like]: search +'%'
                }
            }
        })
        .then((result)=>{
            //console.log(result)
            res.json(result)
        })
    }else{
        Course.findAll({
            attributes : ['course_no','name','section','teacher'],
            where: {
                course_no: {
                    [Op.like]: search +'%'
                }
                }
        })
        .then((result)=>{
            //console.log(result)
            res.json(result)
        })

    }

})
router.get('/:course_no/summary/average',(req,res) => {
    
})


router.get('/:course_no',(req,res) => {
    Course.findOne({
      attributes : ['course_no','name','section','teacher','description','view'],
      where: {
        course_no:req.params.course_no
      }
    }).then((data) => {
      res.json(data)
    })
  })

  router.post('/:course_no/view', (req, res) => {
    return Course.update({
        view: db.Sequelize.literal('view + 1')
      }, {
          where: {
            course_no:req.body.course_no
          }
      }).then(([ rowsUpdate, updatedview ]) => {
        res.json(updatedview)
      })
  })


module.exports = router