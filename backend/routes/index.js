const express = require('express')
const signin = require('./signin')
const signup = require('./signup')
const manage = require('./manage')

const router = express.Router()

router.use('/signin', signin)
router.use('/signup', signup)
router.use('/manage', manage)

module.exports = router