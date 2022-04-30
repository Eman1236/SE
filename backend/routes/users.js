var express = require('express');
var router = express.Router();

var Controller = require('../Controller/index') 

router.post("/login",Controller.User.login);
router.post("/",Controller.User.AddUser);

module.exports = router;

