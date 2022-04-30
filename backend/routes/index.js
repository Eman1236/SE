var express = require('express');
var router = express.Router();

const userRoute = require('./users')

router.use("/user",userRoute);

module.exports = router;