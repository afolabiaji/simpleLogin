exports.postSignup = (req, res, next) => {

}

exports.postLogin = (req, res, next) => {
    
}
exports.getSignup = (req, res, next) => {

}

exports.getLogin = (req, res, next) => {
    if (!loggedIn){
        res.render('', { title: 'Express' });
    }
}