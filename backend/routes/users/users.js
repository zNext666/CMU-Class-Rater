const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const db = require('../../models/index')
const { registerValidationRules, validate } = require('./../../validator')
const User = db.User
const Op = db.Sequelize.Op
const saltRounds = 10;

router.post('/register',registerValidationRules(),validate,(req,res) => {

    // hash a password
    var hashPWD
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        hashPWD = hash
    })
 
    User.create({
        username:req.body.username,
        email:req.body.email,
        password:hashPWD,
        role:{role:['user']}
    }).then(data=>{
        res.json(data)
    })
})

module.exports = router