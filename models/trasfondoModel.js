const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trasfondoSchema = new Schema({
 cuerpo:{ type: String}
 //añadir las keys luego!

})
module.exports =Trasfondo = mongoose.model("Trasfondo", trasfondoSchema);