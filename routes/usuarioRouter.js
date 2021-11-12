const express = require("express");
const usuarioRouter = express.Router();
const Usuario = require("../models/usuarioModel");
const Personaje = require("../models/personajeModel");
const bcrypt = require("bcrypt");



//crear usuario
usuarioRouter.post("/signup", async (req, res) => {
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

    const foundUser = await Usuario.findOne({ correo });
    if (foundUser) {
      return res.status(403).json({
        sucess: false,
        message: "este correo ya existe",
      });
    }
    if (password.length < 6) {
      return res.status(403).json({
        sucess: false,
        message: "La contraseña debe tener un mínimo 6 caracteres",
      });
    }
   

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const usuario = new Usuario({
      nick,
      password: hash,
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

//información de usuarios ya creados
usuarioRouter.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find();

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

//modificar un usuario
usuarioRouter.put("/find/:id/update", async (req, res) => {

  try {
    const { id } = req.params;
    let {
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
    const usuario = await Usuario.findById(id);

    for (const key in req.body) {
      if (req.body[key]) {
        usuario[key] = req.body[key];
      }
    }

    const usuarioActualizado = await usuario.save();

    return res.send({
      success: true,
      message: `El usuario ${usuario.nick} se modificó correctamente`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

//borrar un usuario
usuarioRouter.delete("/find/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;
    let usuario = await Usuario.findByIdAndDelete(id);
    return res.send({
      sucess: true,
      message: `el usuario ${usuario.nick}  ha sido borrado con éxito`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});
module.exports = usuarioRouter;