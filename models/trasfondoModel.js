const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trasfondoSchema = new Schema({
  cuerpo: { type: String, required: true },
  personaje: { type: mongoose.Types.ObjectId, ref: "Personaje" },
  otrosPersonajes: { type: String }, //añadir referencia más tarde
});
module.exports = Trasfondo = mongoose.model("Trasfondo", trasfondoSchema);
