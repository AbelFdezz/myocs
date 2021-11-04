const express = require("express");
const personajeRouter = express.Router();
const Personaje = require("../models/personajeModel");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ruta para coger los datos de juego
personajeRouter 
.route("/")

.post( async (req, res) => {
    let {nombre, } = req.body;
  
    let personaje = { };
    personaje.nombre = nombre;
    // personaje.correo crear más adelante!


    let personajeModel = new Personaje(personaje);
    await personajeModel.save();
    res.send(personajeModel);
 })
    
.get((req, res) =>{
Personaje.find({}, (err, personajes) =>{
    if (err) {
        res.status(400).send (err.response.data);
    }
    res.json(personajes);
});
})
module.exports = personajeRouter;