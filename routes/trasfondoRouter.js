const express = require("express");
const trasfondoRouter = express.Router();
const Trasfondo = require("../models/trasfondoModel");
const Personaje = require("../models/personajeModel");

//crear un trasfondo
trasfondoRouter.post("/", async (req, res) => {
 // console.log(req.body)
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
trasfondoRouter.delete("/find/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;
    let trasfondo = await Trasfondo.findByIdAndDelete(id);

    
    let trasfondoArray = await Personaje.findById(id);
    trasfondoArray.otrosTrasfondos.remove(id);
await trasfondoArray.save();

  
    let otrosArray = await Personaje.findById(id);
   otrosArray.trasfondo.remove(id);
   await otrosArray.save();



    /*
    trasfondosArray.otrosTrasfondos.delete(newTrasfondo._id);
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
trasfondoRouter.put("/find/:id/update", async (req, res) => {
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
