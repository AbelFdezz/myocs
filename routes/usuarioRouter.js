const express = require("express");
const usuarioRouter = express.Router();
const Usuario = require("../models/usuarioModel");

usuarioRouter.post("/", async (req, res) => {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      //añadir || otros campos
      return res.status(403).json({
        success: false,
        message: "No has escrito nada",
      });
    }
    const usuario = new Usuario({
      nombre
    });
    const newUsuario = await usuario.save();
    return res.status(201).json({
      success: true,
      trasfondo: newUsuario,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

usuarioRouter.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    return res.json({
      success: true,
     usuarios,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = usuarioRouter;
