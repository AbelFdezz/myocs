const express = require("express");
const trasfondoRouter = express.Router();
const Trasfondo = require("../models/trasfondoModel");
const Personaje = require("../models/personajeModel");

//crear un trasfondo
trasfondoRouter.post("/", async (req, res) => {
  try {
    const { cuerpo, personaje, otrosPersonajes } = req.body;

    if (!cuerpo || !personaje) {
      return res.status(403).json({
        success: false,
        message: "Hay campos sin completar",
      });
    }
    const trasfondo = new Trasfondo({
      cuerpo,
      personaje,
      otrosPersonajes,
    });
    const newTrasfondo = await trasfondo.save();
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
    let { cuerpo, personaje, otrosPersonajes } = req.body;
    const trasfondo = await Trasfondo.findById(id);

    for (const key in req.body) {
      if (req.body[key]) {
        trasfondo[key] = req.body[key];
      }
    }
    /*
    if (cuerpo) {
      trasfondo.cuerpo = cuerpo;
    }
    if (personaje) {
      trasfondo.personaje = personaje;
    }
    if (otrosPersonajes) {
      trasfondo.otrosPersonajes = otrosPersonajes;
    }
*/
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
