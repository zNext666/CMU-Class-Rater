const express = require('express')
const router = express.Router()
const db = require('../db')

router.post('/register',(req,res) => { 
    console.log(req.body)
    var req_username = req.body.username
    var req_password = req.body.password
    if(req_username === "" || req_password === ""){

    }else{
        db.User.create({username:req_username,password:req_password}).then((user)=>{
            console.log("generated ID "+ user.id)
            res.send("generated ID: "+ user.id)
        })
    }
})

module.exports = router