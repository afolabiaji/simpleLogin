let User = require('../models/user')
let bcrypt = require('bcryptjs')

exports.postSignup = async (req, res, next) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (password == confirmPassword) {
        try {
            const userObj = await User.findOne({ where: { username: username } })

            if (userObj) {
                return res.redirect('/signup')
            }
            const hashedPassword = await bcrypt.hash(password, 12)
            const user = await User.create({
                email: email,
                username: username,
                password: hashedPassword
            })

            console.log(user)
            return res.redirect('/login')
            
        } catch (err) {
            console.log(err)
        }

    }

}

exports.postLogin = (req, res, next) => {

}
exports.getSignup = (req, res, next) => {
    res.render('signup', { loggedIn: req.session.loggedIn });
}

exports.getLogin = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.render('login', { loggedIn: req.session.loggedIn });
    }
}