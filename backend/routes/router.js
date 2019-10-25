const express = require('express')
const router = express.Router()
const courseRouter = require('./course/course')
const coursesRouter = require('./courses/courses')
const reviewRouter = require('./review/review')
const reviewsRouter = require('./reviews/reviews')

// router to another files
router.use('/course', courseRouter)
router.use('/courses', coursesRouter)
router.use('/review', reviewRouter)
router.use('/reviews', reviewsRouter)

// export the router
module.exports = router