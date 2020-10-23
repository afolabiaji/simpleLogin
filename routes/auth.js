var authController = require('../controllers/auth')
var router = express.Router();

router.get('/signup', authContoller.getSignup)

router.get('/login', authContoller.getLogin)

router.post('/signup', authContoller.postSignup)

router.post('/login', authContoller.postLogin)

module.exports = router;