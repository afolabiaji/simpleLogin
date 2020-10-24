let express = require('express');
let router = express.Router();

exports.getUsers = function (req, res, next) {
    res.send('respond with a resource');
}