const express = require("express");
const juegoRouter = express.Router();
const Juego = require("../models/juegoModel");


juegoRouter.post("/", async (req, res) => {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      //añadir || otros campos
      return res.status(403).json({
        success: false,
        message: "No has escrito nada",
      });
    }
    const juego = new Juego({
      nombre
    });
    const newJuego = await juego.save();
    return res.status(201).json({
      success: true,
      juego: newJuego,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

juegoRouter.get("/", async (req, res) => {
  try {
    const juegos = await Juego.find({});
    return res.json({
      success: true,
      juegos,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = juegoRouter;
