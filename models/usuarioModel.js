const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var valMail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const usuarioSchema = new Schema({
 nick:{ type: String, required: true}, 
 password:{ type: String, required: "Por favor, introduce una contraseña."}, 
 correo:{ type: String, required: true, unique: true, validate:[valMail, "Por favor, introduce un correo válido."]},
 nombreReal:{ type: String},
 edad:{ type: Number},
 pronombres:{ type: String},
 sobreMi:{ type: String},
enlaces:{ type: String},
personajes :[{ type: mongoose.Types.ObjectId, ref: "Personaje"}]

})
module.exports =Usuario = mongoose.model("Usuario", usuarioSchema);