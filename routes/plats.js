var express = require('express');
var router = express.Router();

var platcontroller = require('../controller/plat');

router.get('/get' , platcontroller.getAllplats);

router.post('/add',platcontroller.AddPlat);

module.exports = router;