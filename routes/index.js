var express = require('express');
var router = express.Router();


//import controllers
const { get_landing } = require('../app/controllers/landing');

/* GET home page. */
router.get('/',get_landing);

module.exports = router;
