const { JWT_SECRET } = process.env;
const { checkToken } = require("../middlewares");
const jwt = require("jsonwebtoken");
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

    const buscarUsuario = await Usuario.findOne({ correo });
    if (buscarUsuario) {
      return res.status(403).json({
        sucess: false,
        message: "este correo ya existe",
      });
    } else if (
      password.search(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,16}$/
      )
    ) {
      return res.status(403).json({
        sucess: false,
        message:
          "La contraseña debe tener algún número, alguna mayúscula y un caracter especial",
      });
    }

    //const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, 10);

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

    //creación de Token
    const token = jwt.sign({ id: newUsuario._id }, JWT_SECRET, {
      expiresIn: "168h",
    }); //poner 15 dias

    return res.status(201).json({
      success: true,
      trasfondo: newUsuario,
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

usuarioRouter.post("/login", async (req, res) => {
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

  const usuario = await Usuario.findOne({ correo });

  if (!usuario) {
    return res.status(401).json({
      success: false,
      message: "Credenciales erróneas (correo)",
    });
  }

  const match = await bcrypt.compare(password, usuario.password);

  if (!match) {
    return res.status(401).json({
      success: false,
      message: "Credenciales erróneas (password)",
    });
  }
  //creación de Token
  const token = jwt.sign({ id: usuario._id }, JWT_SECRET, { expiresIn: "24h" });

  return res.json({
    success: true,
    token,
  });
});
//información de usuarios ya creados
usuarioRouter.get("/", checkToken, async (req, res) => {
  const { id } = req.usuario;
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
usuarioRouter.put("/find/:id/update", checkToken, async (req, res) => {
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
usuarioRouter.delete("/find/:id/delete", checkToken, async (req, res) => {
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
