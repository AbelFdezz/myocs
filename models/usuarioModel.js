const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
 nombre:{ type: String}
 //añadir las keys luego!

})
module.exports =Usuario = mongoose.model("Usuario", usuarioSchema);