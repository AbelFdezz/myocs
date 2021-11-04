const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personajeSchema = new Schema({
 nombre:{ type: String}
 //añadir las keys luego!

})
module.exports =Personaje = mongoose.model("Personaje", personajeSchema);