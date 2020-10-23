var express = require('express');
var router = express.Router();

exports.getIndex = function (req, res, next) {
    res.render('index', { loggedIn: loggedIn });
}