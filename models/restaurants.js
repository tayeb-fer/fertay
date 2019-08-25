var mongoose = require('mongoose');
var schema = mongoose.Schema ;

var restaurantSchema  = new Schema ({
    nom: String,
    position:{
        lat:Number,
        long:Number
    },
    image:string,
    plats:[string]
})

var Restaurant = mongoose.model('restaurant',restaurantSchema);

module.exports = Restaurant;