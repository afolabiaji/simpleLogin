let express = require('express');
let router = express.Router();

let isAuth = require('../middleware/is-auth');
let usersController = require('../controllers/users');

/* GET users listing. */
router.get('/', isAuth, usersController.getUsers);

module.exports = router;
