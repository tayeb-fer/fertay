var mongoose = require('mongoose');
var schema = mongoose.Schema;

var platSchema = new schema ({
    nom: String,
    ingrdient: String,
    prix:number
});


var Plat = mongoose.model('Plat',platSchema);
module.exports = Plat;
