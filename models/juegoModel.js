const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const juegoSchema = new Schema({
 name:{ type: String}
})
module.exports = Juego = mongoose.model("Juego", juegoSchema);