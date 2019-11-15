const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const db = require('../../models/index')
const { registerValidationRules, validate } = require('./../../validator')
const User = db.User
const Op = db.Sequelize.Op
const saltRounds = 10

router.post('/register',registerValidationRules(),validate,(req,res) => {
    User.create({
        username:req.body.username,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,saltRounds),
        role:{role:['user']}
    }).then(data=>{
        res.json(data)
    })
})

router.post('/login',(req,res) => {
    User.findOne({
        attributes : ['id', 'username','email','role','password'],
        where: {
          username:req.body.username
        },order: db.sequelize.literal('createdAt DESC')
    }).then(data => {
        if(!data){
            res.status(422).json({
                "error":"User not found!"
            })
        }
        if(bcrypt.compareSync(req.body.password,data.password)){
            res.json({
                id:data.id,
                username:data.username,
                email:data.email,
                role:data.role
            })
        }else{
            res.status(422).json({
                "error":"Password not match!"
            })
        }
    })
})

router.put('/login',(req,res)=>{
    User.upsert({
        
    },{
        returning:true
    }).then(data =>{
        return res.json(data)
    }).catch(error => {
        console.log(error)
        return res.status(500)
    })
})
module.exports = router