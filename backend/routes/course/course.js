const express = require('express')
const router = express.Router()
const db = require('../../models/index')
const Course = db.Course
const Op = db.Sequelize.Op
router.get('/search',(req,res) => {
  var offset = 0
  if(req.query.page != null && req.query.page > 0){
    offset = 9*(req.query.page - 1)
  }
    var search = req.query.search
    console.log(Number(search))
    if(isNaN(Number(search))){
        Course.findAndCountAll({
            attributes : ['course_no','name','section','teacher','description', 'credit','view'],
            where: {
                name: {
                    [Op.like]: search +'%'
                }
            },
            offset: offset,
            limit: 9
        })
        .then((result)=>{
            //console.log(result)
            res.json(result)
        })
    }else{
        Course.findAndCountAll({
            attributes : ['course_no','name','section','teacher','description', 'credit','view'],
            where: {
                course_no: {
                    [Op.like]: search +'%'
                }
            },
            offset: offset,
            limit: 9
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
      console.log(data)
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