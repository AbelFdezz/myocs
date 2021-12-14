const { JWT_SECRET } = process.env;
const { checkToken } = require("../middlewares");
const jwt = require("jsonwebtoken");
const express = require("express");
const usuarioRouter = express.Router();
const Usuario = require("../models/usuarioModel");
const Personaje = require("../models/personajeModel");
const bcrypt = require("bcrypt");

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

    console.log(req.body);

    if (!nick || !password || !correo) {
      return res.status(403).json({
        success: false,
        message: "Falta información. Revise los datos.",
      });
    }
    const buscarUsuario = await Usuario.findOne({ nick });
    if (buscarUsuario) {
      return res.status(403).json({
        sucess: false,
        message: "Ya existe una cuenta vinculada con este nombre de usuario",
      });
    }

    const buscarCorreo = await Usuario.findOne({ correo });
    if (buscarCorreo) {
      return res.status(403).json({
        sucess: false,
        message: "Ya existe una cuenta vinculada con este correo",
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

    const token = jwt.sign({ id: newUsuario._id }, JWT_SECRET, {
      expiresIn: "360h",
    });

    return res.status(201).json({
      success: true,
      usuario: newUsuario,
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

  const token = jwt.sign({ id: usuario._id }, JWT_SECRET, {
    expiresIn: "336h",
  });

  return res.json({
    success: true,
    token,
  });
});

usuarioRouter.get("/", async (req, res) => {
  //const { id } = req.usuario; //poner cuando ponga el checktoken de vuelta
  try {
    const usuarios = await Usuario.find().populate("personajes", "nombre");

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

usuarioRouter.put("/updateUsuario/:id", checkToken, async (req, res) => {
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
        if (key == "password") {
          const hash = await bcrypt.hash(password, 10);
          usuario.password = hash;
          continue;
        }

        usuario[key] = req.body[key];
      }
    }

    const usuarioActualizado = await usuario.save();

    return res.send({
      success: true,
      message: `Los datos del usuario ${usuario.nick} han sido modificados correctamente.`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

usuarioRouter.delete("/find/:id/delete", checkToken, async (req, res) => {
  try {
    const { id } = req.params;

    let usuario = await Usuario.findByIdAndDelete(id);
    return res.send({
      sucess: true,
      message: `el usuario ${usuario.nick}  ha sido borrado.`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

//ruta para ver "mis personajes"
usuarioRouter.get("/find/misPersonajes", checkToken, async (req, res) => {
  const { id } = req.usuario;
  try {
    const misPersonajes = await Usuario.findById(id).populate({
      path: "personajes",
      select: "nombre",
      //populate: { path: "personajes", select: "imagen" },
    });
    arrayPersonajes = misPersonajes.personajes;
    console.log(arrayPersonajes);

    return res.json({
      success: true,
      arrayPersonajes,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

usuarioRouter.get("/find/miPerfil", checkToken, async (req, res) => {
  const { id } = req.usuario;
  try {
    const miPerfil = await Usuario.findById(id);

    console.log(miPerfil);

    return res.json({
      success: true,
      miPerfil,
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
