const express = require("express");
const trasfondoRouter = express.Router();
const Trasfondo = require("../models/trasfondoModel");


trasfondoRouter.post("/", async (req, res) => {
  try {
    const { cuerpo, personaje, otrosPersonajes } = req.body;

    if (!cuerpo|| !personaje) {
      return res.status(403).json({
        success: false,
        message: "Hay campos sin completar",
      });
    }
    const trasfondo = new Trasfondo({
      cuerpo, personaje, otrosPersonajes
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

trasfondoRouter.get("/", async (req, res) => {
  try {
    const trasfondos = await Trasfondo.find({});
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

module.exports = trasfondoRouter;
