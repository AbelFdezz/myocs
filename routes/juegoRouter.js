const express = require("express");
const juegoRouter = express.Router();
const Juego = require("../models/juegoModel");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ruta para coger los datos de juego
juegoRouter 
.route("/")

.post( async (req, res) => {
    let {name} = req.body;
  
    let juego = {
     name
    }
    let juegoModel = new Juego(juego);
    await juegoModel.save();
    res.send(juegoModel);
 })
    
.get((req, res) =>{
Juego.find({}, (err,juegos) =>{
    if (err) {
        res.status(400).send (err.response.data);
    }
    res.json(juegos);
});
})
module.exports = juegoRouter;