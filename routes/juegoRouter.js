const express = require("express");
const { checkToken } = require("../middlewares");
const juegoRouter = express.Router();
const Juego = require("../models/juegoModel");

juegoRouter.post("/", checkToken, async (req, res) => {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(403).json({
        success: false,
        message: "No has escrito nada",
      });
    }
    const juego = new Juego({
      nombre,
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
    const juegos = await Juego.find();
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

juegoRouter.delete("/find/:id/delete", checkToken, async (req, res) => {
  try {
    const { id } = req.params;
    let juego = await Juego.findByIdAndDelete(id);
    return res.send({
      sucess: true,
      message: `El juego ha sido borrado.`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

juegoRouter.put("/find/:id/update", checkToken, async (req, res) => {
  try {
    const { id } = req.params;
    let { nombre } = req.body;
    const juego = await Juego.findById(id);
    if (nombre) {
      juego.nombre = nombre;
    }

    const juegoActualizado = await juego.save();

    return res.send({
      success: true,
      message: `Has cambiado el nombre del juego a ${juego.nombre}.`,
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
