const express = require("express");
const usuarioRouter = express.Router();
const Usuario = require("../models/usuarioModel");

//crear usuario
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

//información de usuarios ya creados
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
    if (nick) {
      usuario.nick = nick;
    }
    if (password) {
      usuario.pasword = password;
    }
    if (correo) {
      usuario.correo = correo;
    }
    if (nombreReal) {
      usuario.nombreReal = nombreReal;
    }
    if (edad) {
      usuario.edad = edad;
    }
    if (pronombres) {
      usuario.pronombres = pronombres;
    }
    if (sobreMi) {
      usuario.sobreMi = sobreMi;
    }
    if (enlaces) {
      usuario.enlaces = enlaces;
    }
    if (personajes) {
      usuario.personajes = personajes;
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
