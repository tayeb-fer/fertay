var express = require('express');
var router = express.Router();

var restController = require('../controller/restaurants');

router.get('/get', restController.getAllRestaurant);

router.post('/add', restController.AddRestaurant);

module.exports = router;