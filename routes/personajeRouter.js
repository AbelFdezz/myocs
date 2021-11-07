const express = require("express");
const personajeRouter = express.Router();
const Personaje = require("../models/personajeModel");

personajeRouter.post("/", async (req, res) => {
  try {
    const {
      nombre,
      juego,
      detallesJuego,
      estado,
      autor,
      imagen,
      trasfondo,
      edad,
      genero,
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
      loQueMasImporta,    puntoFuerte,
      puntoDebil,
      manejoIra,
      manejoTristeza,
      manejoConflictos,
      adaptacionCambios,
      adaptacionPerdidas,
      motivaciones, miedos, queLeHaceFeliz, nivelEmpatia, religion, creenciasEspirituales, padre, madre, hermanos, pareja, hijos, amigos, vecinos, enemigos
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
      imagen,
      trasfondo,
      edad,
      genero,
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
      motivaciones, miedos, queLeHaceFeliz, nivelEmpatia, religion, creenciasEspirituales, padre, madre, hermanos, pareja, hijos, amigos, vecinos, enemigos
    });
    const newPersonaje = await personaje.save();
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

personajeRouter.get("/", async (req, res) => {
  try {
    const personajes = await Personaje.find({});
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

module.exports = personajeRouter;
