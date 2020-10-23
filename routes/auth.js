var authController = require('../controllers/auth')
var express = require('express')
var router = express.Router();

router.get('/signup', authController.getSignup)

router.get('/login', authController.getLogin)

router.post('/signup', authController.postSignup)

router.post('/login', authController.postLogin)

module.exports = router;