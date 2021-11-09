const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
 nick:{ type: String, required: true}, 
 password:{ type: String, required: true, }, //ponerle minimo letra numeros tal 
 correo:{ type: String, required: true},
 nombreReal:{ type: String},
 edad:{ type: Number},
 pronombres:{ type: String},
 sobreMi:{ type: String},
enlaces:{ type: String},
personajes:{ type: Array}

})
module.exports =Usuario = mongoose.model("Usuario", usuarioSchema);