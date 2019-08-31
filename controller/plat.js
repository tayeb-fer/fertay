var plat = require('../models/plats');

exports.getAllplats = function (req, res) {
    plat.find({}, (err, data) => {

        if (err) {
            res.status(500).json({
                success: false,
                error: 'cant access to dtabase',
                err: err

            })
        } else {

            res.status(200).json({
                success: true,
                plats: data
            })

        }


    });
}

exports.AddPlat = function (req, res) {
    var newPlat = new plat({
        nom: req.body.nom,
        ingrdient: req.body.ingrdient,
        prix: req.body.prix
    })
    newPlat.save(function (err) {
        if (err) {
            res.status(500).json({
                success: false,
                error: 'cant add to database',
                err: err
            })

        } else {
            res.status(200).json({
                success: true,
                new: newPlat
            })
        }
    });
}

exports.getplatById = function (req, res) {
    plat.findById(req.params.id, (err, data) => {
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
                    plat: data
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'not found',
                    plat: data
                })
            }
        }
    })
}

exports.updateplat = function (req, res) {
    plat.findByIdAndUpdate(req.params.id, req.body, function (err) {
        if (err) {

            res.status(500).json({
                success: false,
                message: 'cannot update',
                error: err

            })

        } else {
            plat.findById(req.params.id, (err, data) => {
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
                            plat: data
                        })
                    } else {
                        res.status(404).json({
                            success: false,
                            message: 'not found',
                            plat: data
                        })
                    }
                }
            })
        }

    })
}

/* 
function delete
@params id plat
 */

exports.deletePlat = function (req, res) {
    plat.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).json({
                success: false,
                error: err,
                message: 'cant access to dtabase'
            })
        } else {
            if (data) {
                //remove
                plat.findById(req.params.id).remove((err, dtat) => {
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
                    plat: data
                })
            }
        }
    })
}