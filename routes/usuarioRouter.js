const express = require("express");
const usuarioRouter = express.Router();
const Usuario = require("../models/usuarioModel");

usuarioRouter.post("/", async (req, res) => {
  try {
    const {
      nick,
      password,
      correo,
      nombreReal,
      edad,
      pronombres,
      sobreMi,
      enlaces,
      personajes,
    } = req.body;

    if (
      !nick ||
      !password ||
      !correo ||
      !nombreReal ||
      !edad ||
      !pronombres ||
      !sobreMi ||
      !enlaces
    ) {
      return res.status(403).json({
        success: false,
        message: "Falta información. Revise los datos.",
      });
    }
    const usuario = new Usuario({
      nick,
      password,
      correo,
      nombreReal,
      edad,
      pronombres,
      sobreMi,
      enlaces,
      personajes,
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







/*
usuarioRouter.delete("/find/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndDelete(id);
    return res.send({
      sucess: true,
      message: `el usuario ${usuario.nick}  ha sidoborrado con éxito`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});
*/



module.exports = usuarioRouter;
