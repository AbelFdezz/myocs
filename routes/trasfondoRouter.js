const {checkToken} = require("../middlewares"); 
const express = require("express");
const trasfondoRouter = express.Router();
const Trasfondo = require("../models/trasfondoModel");
const Personaje = require("../models/personajeModel");
const Propietario = require("../models/usuarioModel");

//crear un trasfondo
trasfondoRouter.post("/", checkToken, async (req, res) => {

  //return
  try {
    const { titulo, cuerpo, personaje, otrosPersonajes } = req.body;

    if (!titulo || !cuerpo || !personaje) {
      return res.status(403).json({
        success: false,
        message: "Hay campos sin completar",
      });
    }
    const trasfondo = new Trasfondo({
      titulo,
      cuerpo,
      personaje,
      otrosPersonajes,
    });
    const newTrasfondo = await trasfondo.save();

    let trasfondosArray = await Personaje.findById(otrosPersonajes);

    trasfondosArray.otrosTrasfondos.push(newTrasfondo._id);
    await trasfondosArray.save();

    let trasfondosPropios = await Personaje.findById(personaje);
    trasfondosPropios.trasfondo.push(newTrasfondo._id);
    await trasfondosPropios.save();

    return res.status(201).json({
      success: true,
      trasfondo: newTrasfondo,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

//información de trasfondos
trasfondoRouter.get("/", async (req, res) => {
  try {
    let trasfondos = await Trasfondo.find()
      .populate("personaje", "nombre")
      .populate("otrosPersonajes", "nombre");

    return res.json({
      success: true,
      trasfondos,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

//borrar un trasfondo
trasfondoRouter.delete("/find/:id/delete", checkToken, async (req, res) => {
  try {
    const { id } = req.params;
let trasfondoBuscado = await Trasfondo.findById(id);

if (!trasfondoBuscado) {
  return res.status(400).json({
    success: false,
    message: "El trasfondo no existe",
  });
}

let personajeBuscado = await Personaje.findById(trasfondoBuscado.personaje);
console.log(personajeBuscado)

let index = personajeBuscado.trasfondo.indexOf(id);
    if (index > -1) {
      personajeBuscado.trasfondo.splice(index, 1);
     await personajeBuscado.save();
    }


await trasfondoBuscado.deleteOne();
/*
    let trasfondo = await Trasfondo.findByIdAndDelete(id);
    
    let trasfondoArray = await Personaje.findById(id);
    trasfondoArray.otrosTrasfondos.deleteOne(id);
await trasfondoArray.save();

    let otrosArray = await Personaje.findById(id);
   otrosArray.trasfondo.deleteOne(id);
   await otrosArray.save();

*/
    return res.send({
      sucess: true,
      message: `el trasfondo ha sido borrado con éxito`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

//modificar un trasfondo
trasfondoRouter.put("/find/:id/update", checkToken, async (req, res) => {
  try {
    const { id } = req.params;
    let { titulo, cuerpo, personaje, otrosPersonajes } = req.body;
    const trasfondo = await Trasfondo.findById(id);

    for (const key in req.body) {
      if (req.body[key]) {
        trasfondo[key] = req.body[key];
      }
    }

    const trasfondoActualizado = await trasfondo.save();

    return res.send({
      success: true,
      message: `El trasfondo se modificó correctamente`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = trasfondoRouter;
