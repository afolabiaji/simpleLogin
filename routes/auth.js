let authController = require('../controllers/auth')
let express = require('express')
let router = express.Router();

router.get('/signup', authController.getSignup)

router.get('/login', authController.getLogin)

router.post('/signup', authController.postSignup)

router.post('/login', authController.postLogin)

module.exports = router;