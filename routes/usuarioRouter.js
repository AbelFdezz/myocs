const express = require("express");
const usuarioRouter = express.Router();
const Usuario = require("../models/usuarioModel");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ruta para coger los datos de juego
usuarioRouter 
.route("/")

.post( async (req, res) => {
    let {nombre, } = req.body;
  
    let usuario = { };
    usuario.nombre = nombre;
    // usuario.correo


    let usuarioModel = new Usuario(usuario);
    await usuarioModel.save();
    res.send(usuarioModel);
 })
    
.get((req, res) =>{
Usuario.find({}, (err,usuarios) =>{
    if (err) {
        res.status(400).send (err.response.data);
    }
    res.json(usuarios);
});
})
module.exports = usuarioRouter;