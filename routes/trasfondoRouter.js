const express = require("express");
const trasfondoRouter = express.Router();
const Trasfondo = require("../models/trasfondoModel");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ruta para coger los datos de juego
trasfondoRouter 
.route("/")

.post( async (req, res) => {
    let {cuerpo } = req.body;
  
    let trasfondo = { };
    trasfondo.cuerpo = cuerpo;
    // personaje.correo crear más adelante!


    let trasfondoModel = new Trasfondo(trasfondo);
    await trasfondoModel.save();
    res.send(trasfondoModel);
 })
    
.get((req, res) =>{
Trasfondo.find({}, (err, trasfondos) =>{
    if (err) {
        res.status(400).send (err.response.data);
    }
    res.json(trasfondos);
});
})
module.exports = trasfondoRouter;