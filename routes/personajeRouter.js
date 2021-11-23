const { checkToken } = require("../middlewares");
const express = require("express");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const personajeRouter = express.Router();
const Personaje = require("../models/personajeModel");
const Juego = require("../models/juegoModel");
const Propietario = require("../models/usuarioModel");
const Trasfondo = require("../models/trasfondoModel");

personajeRouter.post(
  "/",
  upload.single("imagen"),
  checkToken,
  async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);

      const {
        nombre,
        juego,
        detallesJuego,
        estado,
        autor,
        propietario,
        imagen,
        cloudinary_id,
        trasfondo,
        otrosTrasfondos,
        edad,
        genero,
        idiomas,
        lugarNacimiento,
        lugarResidencia,
        peso,
        raza,
        colorOjos,
        colorPelo,
        colorPiel,
        gafas,
        lentillas,
        formaCara,
        rasgosDistintivos,
        estiloVestimenta,
        habitos,
        aficiones,
        refranFavorito,
        formaHablar,
        enfermedades,
        alergias,
        minusvalias,
        socioeconomiaPeque,
        socioeconomiaActual,
        manias,
        tics,
        estudios,
        trabajo,
        mascotas,
        monturas,
        mayorDefecto,
        mayorVirtud,
        mayorSecreto,
        metasLargoPlazo,
        loQueMasImporta,
        puntoFuerte,
        puntoDebil,
        manejoIra,
        manejoTristeza,
        manejoConflictos,
        adaptacionCambios,
        adaptacionPerdidas,
        motivaciones,
        miedos,
        queLeHaceFeliz,
        nivelEmpatia,
        religion,
        creenciasEspirituales,
        padre,
        madre,
        hermanos,
        pareja,
        hijos,
        amigos,
        vecinos,
        enemigos,
      } = req.body;

      if (!nombre || !juego) {
        return res.status(403).json({
          success: false,
          message:
            "Para guardar tu personaje solo es necesario indicar su nombre y el juego al que pertenece",
        });
      }
      const personaje = new Personaje({
        nombre,
        juego,
        detallesJuego,
        estado,
        autor,
        propietario,
        imagen: result.secure_url,
        cloudinary_id: result.public_id,
        trasfondo,
        otrosTrasfondos,
        edad,
        genero,
        idiomas,
        lugarNacimiento,
        lugarResidencia,
        peso,
        raza,
        colorOjos,
        colorPelo,
        colorPiel,
        gafas,
        lentillas,
        formaCara,
        rasgosDistintivos,
        estiloVestimenta,
        habitos,
        aficiones,
        refranFavorito,
        formaHablar,
        enfermedades,
        alergias,
        minusvalias,
        socioeconomiaPeque,
        socioeconomiaActual,
        manias,
        tics,
        estudios,
        trabajo,
        mascotas,
        monturas,
        mayorDefecto,
        mayorVirtud,
        mayorSecreto,
        metasLargoPlazo,
        loQueMasImporta,
        puntoFuerte,
        puntoDebil,
        manejoIra,
        manejoTristeza,
        manejoConflictos,
        adaptacionCambios,
        adaptacionPerdidas,
        motivaciones,
        miedos,
        queLeHaceFeliz,
        nivelEmpatia,
        religion,
        creenciasEspirituales,
        padre,
        madre,
        hermanos,
        pareja,
        hijos,
        amigos,
        vecinos,
        enemigos,
      });
      const newPersonaje = await personaje.save();

      let personajeArray = await Propietario.findById(propietario);
      personajeArray.personajes.push(newPersonaje._id);
      await personajeArray.save();

      return res.status(201).json({
        success: true,
        personaje: newPersonaje,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        success: false,
        message: err.message || err._message,
      });
    }
  }
);

personajeRouter.get("/", async (req, res) => {
  try {
    const personajes = await Personaje.find()
      .populate("juego", "nombre")
      .populate("propietario", "nick")
      .populate("trasfondo", "titulo")
      .populate("otrosTrasfondos", "titulo");

    return res.json({
      success: true,
      personajes,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

personajeRouter.delete("/find/:id/delete", checkToken, async (req, res) => {
  try {
    const { id } = req.params;
    let personaje = await Personaje.findById(id);

    if (!personaje) {
      return res.status(400).json({
        success: false,
        message: "Este personaje ya fue borrado",
      });
    }

    let usuario = await Propietario.findById(req.usuario.id);

    if (!personaje.propietario.equals(req.usuario.id)) {
      return res.status(400).json({
        success: false,
        message: "No puedes borrar un personaje que no es tuyo.",
      });
    }

    let index = usuario.personajes.indexOf(id);
    if (index > -1) {
      usuario.personajes.splice(index, 1);
      await usuario.save();
    }

    for (let i = 0; i < personaje.otrosTrasfondos.length; i++) {
      let trasfondoBuscado = await Trasfondo.findById(
        personaje.otrosTrasfondos[i]
      );

      let j = trasfondoBuscado.otrosPersonajes.indexOf(id);
      if (j > -1) {
        trasfondoBuscado.otrosPersonajes.splice(j, 1);
        await trasfondoBuscado.save();
      }
    }

    await personaje.deleteOne();

    await cloudinary.uploader.destroy(personaje.cloudinary_id);

    return res.send({
      sucess: true,
      message: `Has borrado el personaje ${personaje.nombre}.`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

personajeRouter.put("/find/:id/update", checkToken, async (req, res) => {
  try {
    const { id } = req.params;
    let {
      nombre,
      juego,
      detallesJuego,
      estado,
      autor,
      propietario,
      imagen,
      cloudinary_id,
      trasfondo,
      edad,
      genero,
      idiomas,
      lugarNacimiento,
      lugarResidencia,
      peso,
      raza,
      colorOjos,
      colorPelo,
      colorPiel,
      gafas,
      lentillas,
      formaCara,
      rasgosDistintivos,
      estiloVestimenta,
      habitos,
      aficiones,
      refranFavorito,
      formaHablar,
      enfermedades,
      alergias,
      minusvalias,
      socioeconomiaPeque,
      socioeconomiaActual,
      manias,
      tics,
      estudios,
      trabajo,
      mascotas,
      monturas,
      mayorDefecto,
      mayorVirtud,
      mayorSecreto,
      metasLargoPlazo,
      loQueMasImporta,
      puntoFuerte,
      puntoDebil,
      manejoIra,
      manejoTristeza,
      manejoConflictos,
      adaptacionCambios,
      adaptacionPerdidas,
      motivaciones,
      miedos,
      queLeHaceFeliz,
      nivelEmpatia,
      religion,
      creenciasEspirituales,
      padre,
      madre,
      hermanos,
      pareja,
      hijos,
      amigos,
      vecinos,
      enemigos,
    } = req.body;
    const personaje = await Personaje.findById(id);

    for (const key in req.body) {
      if (req.body[key]) {
        personaje[key] = req.body[key];
      }
    }

    let usuario = await Propietario.findById(req.usuario.id);

    let index = usuario.personajes.indexOf(id);
    console.log(index);
    if (index == -1) {
      return res.status(400).json({
        success: false,
        message: "No puedes modificar un pesonaje que no es tuyo.",
      });
    }

    const personajeActualizado = await personaje.save();

    return res.send({
      success: true,
      message: `El personaje se ha renombrado como ${personaje.nombre}.`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

personajeRouter.get("/nombre/:nombre", async (req, res) => {
  //ruta busqueda por nombre
  try {
    const { nombre } = req.params;
    const personajes = await Personaje.find({ nombre })
      .populate("juego", "nombre")
      .populate("propietario", "nick")
      .populate("trasfondo", "titulo")
      .populate("otrosTrasfondos", "titulo");

    return res.json({
      success: true,
      personajes,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

personajeRouter.put(
  //solo para sustituir imagenes
  "/imagen/:id/update",
  upload.single("imagen"),
  checkToken,
  async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);

      const { id } = req.params;
      let {
        nombre,
        juego,
        detallesJuego,
        estado,
        autor,
        propietario,
        imagen,
        cloudinary_id,
        trasfondo,
        edad,
        genero,
        idiomas,
        lugarNacimiento,
        lugarResidencia,
        peso,
        raza,
        colorOjos,
        colorPelo,
        colorPiel,
        gafas,
        lentillas,
        formaCara,
        rasgosDistintivos,
        estiloVestimenta,
        habitos,
        aficiones,
        refranFavorito,
        formaHablar,
        enfermedades,
        alergias,
        minusvalias,
        socioeconomiaPeque,
        socioeconomiaActual,
        manias,
        tics,
        estudios,
        trabajo,
        mascotas,
        monturas,
        mayorDefecto,
        mayorVirtud,
        mayorSecreto,
        metasLargoPlazo,
        loQueMasImporta,
        puntoFuerte,
        puntoDebil,
        manejoIra,
        manejoTristeza,
        manejoConflictos,
        adaptacionCambios,
        adaptacionPerdidas,
        motivaciones,
        miedos,
        queLeHaceFeliz,
        nivelEmpatia,
        religion,
        creenciasEspirituales,
        padre,
        madre,
        hermanos,
        pareja,
        hijos,
        amigos,
        vecinos,
        enemigos,
      } = req.body;

      const personaje = await Personaje.findById(id);
      await cloudinary.uploader.destroy(personaje.cloudinary_id);

      if ({ imagen }) {
        personaje.imagen = result.secure_url;
      }
      if ({ cloudinary_id }) {
        personaje.cloudinary_id = result.public_id;
      }

      const personajeActualizado = await personaje.save();

      return res.send({
        success: true,
        message: `La imagen se ha modificado correctamente.`,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
);

module.exports = personajeRouter;
