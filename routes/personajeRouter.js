const { checkToken } = require("../middlewares");
const express = require("express");
const personajeRouter = express.Router();
const Personaje = require("../models/personajeModel");
const Juego = require("../models/juegoModel");
const Propietario = require("../models/usuarioModel");
const Trasfondo = require("../models/trasfondoModel");

//crear personaje
personajeRouter.post("/", checkToken, async (req, res) => {
  try {
    const {
      nombre,
      juego,
      detallesJuego,
      estado,
      autor,
      propietario,
      imagen,
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
        message: "Falta información imprescindible",
      });
    }
    const personaje = new Personaje({
      nombre,
      juego,
      detallesJuego,
      estado,
      autor,
      propietario,
      imagen,
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
});

//información de personajes creados
personajeRouter.get("/", async (req, res) => {
  try {
    const personajes = await Personaje.find()
      .populate("juego", "nombre")
      .populate("propietario", "nick")
      .populate("trasfondo")
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

//borrar personaje por id
personajeRouter.delete("/find/:id/delete", checkToken, async (req, res) => {
  try {
    const { id } = req.params;
    let personaje = await Personaje.findById(id);

    if (!personaje) {
      return res.status(400).json({
        success: false,
        message: "El personaje no existe",
      });
    }

    let usuario = await Propietario.findById(req.usuario.id);
    //console.log(usuario)

    if (!personaje.propietario.equals(req.usuario.id)) {
      return res.status(400).json({
        success: false,
        message: "El personaje no es de tu propiedad",
      });
    }

    let index = usuario.personajes.indexOf(id);
    if (index > -1) {
      usuario.personajes.splice(index, 1);
     await usuario.save();
    }

    await personaje.deleteOne(); 



    return res.send({
      sucess: true,
      message: `el personaje ${personaje.nombre} ha sido borrado con éxito`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

//modificar personaje
personajeRouter.put("/find/:id/update", checkToken, async (req, res) => {
  //if (usuarios[0]._id)
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

    const personajeActualizado = await personaje.save();

    return res.send({
      success: true,
      message: `El personaje se modificó correctamente`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = personajeRouter;
