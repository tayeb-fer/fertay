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


exports.getRestaurantById = function (req, res) {
    Restaurant.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                error: err,
                message: 'cant access to dtabase'
            })
        } else {
            if (data) {
                res.status(202).json({
                    success: true,
                    restaurants: data
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'not found',
                    restaurants: data
                })
            }
        }
    })
}


exports.updateRestaurant = function (req, res) {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, function (err) {
        if (err) {

            res.status(500).json({
                success: false,
                message: 'cannot update',
                error: err

            })

        } else {
            Restaurant.findById(req.params.id, (err, data) => {
                if (err) {
                    res.status(500).json({
                        success: false,
                        error: err,
                        message: 'cant access to dtabase'
                    })
                } else {
                    if (data) {
                        res.status(202).json({
                            success: true,
                            restaurants: data
                        })
                    } else {
                        res.status(404).json({
                            success: false,
                            message: 'not found',
                            restaurants: data
                        })
                    }
                }
            })
        }

    })
}

exports.deleteRestaurant = function (req, res) {
    Restaurant.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                error: err,
                message: 'cant access to dtabase'
            })
        } else {
            if (data) {
                //remove
                Restaurant.findById(req.params.id).remove((err, dtat) => {
                    if (err) {

                        res.status(500).json({
                            success: false,
                            error: err,
                            message: 'connot delete plat'
                        })

                    } else {

                        res.status(200).json({
                            success: true,
                            message: 'plat delete'
                        })

                    }
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'plat for delete not found',
                    restaurants: data
                })
            }
        }
    })
}