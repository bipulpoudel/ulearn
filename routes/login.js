var express = require('express');
var router = express.Router();


//import controllers
const { get_login } = require('../app/controllers/login');

/* GET home page. */
router.get('/',get_login);

module.exports = router;
