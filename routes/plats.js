var express = require('express');
var router = express.Router();

var platcontroller = require('../controller/plat');

router.get('/get' , platcontroller.getAllplats);

router.post('/add',platcontroller.AddPlat);

router.get('/get/:id', platcontroller.getplatById);

router.put('/update/:id',platcontroller.updateplat);

router.delete('/delete/:id',platcontroller.deletePlat);

module.exports = router;