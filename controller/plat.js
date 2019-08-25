var plat = require('../models/plats');

exports.getAllplats = function(req,res) {
    plat.find({},( err , data ) => {

        if (err) {
            res.status(500).json({
                success: false,
                error: 'cant access to dtabase',
                err:err
                
            })
        } else {

            res.status(200).json({
                success:true,
                plats: data
            })

        }


    });
}

exports.AddPlat = function(req,res){
    var newPlat = new plat ({
        nom: req.body.nom,
        ingrdient: req.body.ingrdient,
        prix:req.body.prix
    })
    newPlat.save(function(err){
        if (err){
            res.status(500).json({
                success:false,
                error: 'cant add to database',
                err:err
            })
        
        }else{
            res.status(200).json({
                success: true,
                new:newPlat
            })
        }
    });
}