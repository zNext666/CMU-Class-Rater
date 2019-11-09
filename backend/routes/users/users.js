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
        attributes : ['username','email','role','password'],
        where: {
          username:req.body.username
        },order: db.sequelize.literal('createdAt DESC')
    }).then(data => {
        if(!data){
            res.json({
                "error":"User not found!"
            }).status(422)
        }
        if(bcrypt.compareSync(req.body.password,data.password)){
            res.json({
                username:data.username,
                email:data.email,
                role:data.role
            })
        }else{
            res.json({
                "error":"Password not match!"
            }).status(422)
        }
    })
})

module.exports = router