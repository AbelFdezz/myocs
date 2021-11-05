const express = require("express");
const personajeRouter = express.Router();
const Personaje = require("../models/personajeModel");


personajeRouter.post("/", async (req, res) => {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      //añadir || otros campos
      return res.status(403).json({
        success: false,
        message: "No has escrito nada",
      });
    }
    const personaje = new Personaje({
      nombre,
    });
    const newPersonaje = await personaje.save();
    return res.status(201).json({
      success: true,
      personaje: newPersonaje,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

personajeRouter.get("/", async (req, res) => {
  try {
    const personajes = await Personaje.find({});
    return res.json({
      success: true,
      personajes,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = personajeRouter;
