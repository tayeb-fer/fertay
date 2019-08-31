var mongoose = require('mongoose');
var Schema = mongoose.Schema ;

var restaurantSchema  = new Schema ({
    nom: String,
    position:{
        lat:Number,
        long:Number
    },
    image:String,
    plats:[String]
})

var Restaurant = mongoose.model('restaurant',restaurantSchema);

module.exports = Restaurant;