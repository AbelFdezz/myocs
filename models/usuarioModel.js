const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/*
var valMail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var valPassword = function(email) {
    let reg = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,16}$/);
    return reg.test(email)
};
*/


const usuarioSchema = new Schema({
 nick:{ type: String, required: true}, 
 password:{ type: String, required: "Por favor, introduce una contraseña.", /*validate: [valPassword, "La contraseña debe tener algún número, alguna mayúscula y un caracter especial"]*/}, //ponerle minimo letra numeros tal 
 correo:{ type: String, required: true, unique: true}, //required: "Por favor, indique su dirección de correo", validate:[valMail, "por favor, introduce un correo válido."]},
 nombreReal:{ type: String},
 edad:{ type: Number},
 pronombres:{ type: String},
 sobreMi:{ type: String},
enlaces:{ type: String},
personajes :[{ type: mongoose.Types.ObjectId, ref: "Personaje"}]

})
module.exports =Usuario = mongoose.model("Usuario", usuarioSchema);