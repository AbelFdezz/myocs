const express = require("express");
const { checkToken } = require("../middlewares");
const juegoRouter = express.Router();
const Juego = require("../models/juegoModel");

//nuevo juego
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

//información de juegos
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

//borrar juegos
juegoRouter.delete("/find/:id/delete", checkToken, async (req, res) => {
  try {
    const { id } = req.params;
    let juego = await Juego.findByIdAndDelete(id);
    return res.send({
      sucess: true,
      message: `el juego ha sido borrado con éxito`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

//modificar juegos
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
      message: `El juego se modificó correctamente`,
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
