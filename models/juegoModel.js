const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const juegoSchema = new Schema({
 nombre:{ type: String, required: true}
})
module.exports = Juego = mongoose.model("Juego", juegoSchema);