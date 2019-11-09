const { body, validationResult } = require('express-validator')
const db = require('./models/index')
// Rules
const registerValidationRules = () => {
  return [
    body('username').isLength({min:6,max:60}).withMessage('Must be at least 6 chars long,And shouldn\'t long 60 chars').custom((value,{req})=>{
      return db.User.findOne({
        attributes : ['username'],
        where: {
          username:value
        },order: db.sequelize.literal('createdAt DESC')  
      }).then(username=>{
        if(username){
          return Promise.reject('Username already exists')
        }
      })
    }),
    body('email').isEmail().withMessage('Invalid E-mail format').custom((value,{req})=>{
      return db.User.findOne({
        attributes:['email'],
        where:{
          email:value
        },order: db.sequelize.literal('createdAt DESC')
      }).then(email=>{
        if(email){
          return Promise.reject('Email already exists')
        }
      })
    }),
    body('password').not().isEmpty().withMessage('password is empty').isLength({ min: 5,max:255}).withMessage('Must be at least 5 chars long,And shouldn\'t long 255 chars'),
    body('confirmpassword').not().isEmpty().custom((value,{req})=>{
        if(value !== req.body.password){
            throw new Error('Password confirmation does not match password')
        }
        return true
    })
  ]
}
// error message handling
const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  registerValidationRules,
  validate,
}