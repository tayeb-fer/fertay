var Restaurant = require('../models/restaurants');

exports.getAllRestaurant = function (req, res) {
    Restaurant.find({}, (err, data) => {

        if (err) {
            res.status(500).json({
                success: false,
                error: 'cant access to database',
                err: err

            })
        } else {

            res.status(200).json({
                success: true,
                restaurants: data
            })

        }


    });
}

exports.AddRestaurant = function (req, res) {
    var newRestaurant = new Restaurant({
        nom: req.body.nom,
        position: req.body.position,
        image: req.body.image,
        plats: req.body.plats
    })
    newRestaurant.save(function (err) {
        if (err) {
            res.status(500).json({
                success: false,
                error: 'cant add to database',
                err: err
            })

        } else {
            res.status(200).json({
                success: true,
                new: newRestaurant
            })
        }
    });
}