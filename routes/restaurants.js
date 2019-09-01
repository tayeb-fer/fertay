var express = require('express');
var router = express.Router();

var restController = require('../controller/restaurants');

router.get('/get', restController.getAllRestaurant);

router.post('/add', restController.AddRestaurant);

router.get('/get/:id',restController.getRestaurantById);

router.put('/update/:id',restController.updateRestaurant);

router.delete('/delete/:id',restController.deleteRestaurant);

module.exports = router;