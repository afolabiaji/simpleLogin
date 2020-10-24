let express = require('express');
let router = express.Router();

exports.getIndex = function (req, res, next) {
    res.render('index', { loggedIn: req.session.loggedIn });
}