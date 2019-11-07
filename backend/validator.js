const { body, validationResult } = require('express-validator')
// Rules
const registerValidationRules = () => {
  return [
    body('username').not().isEmpty().withMessage('username is empty'),
    body('email').isEmail().withMessage('Invalid email format').not().isEmpty().withMessage('email is empty'),
    body('password').not().isEmail().isLength({ min: 5,max:255}).withMessage('Must be at least 5 chars long,And shouldn\'t long 255 chars '),
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