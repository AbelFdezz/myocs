const { checkToken } = require("../middlewares");
const express = require("express");
const trasfondoRouter = express.Router();
const Trasfondo = require("../models/trasfondoModel");
const Personaje = require("../models/personajeModel");
const Propietario = require("../models/usuarioModel");

trasfondoRouter.post("/", checkToken, async (req, res) => {
  try {
    const { titulo, cuerpo, personaje, otrosPersonajes } = req.body;

let usuario = await Propietario.findById(req.usuario.id);
console.log(usuario)
console.log(req.body)
    if (!titulo || !cuerpo || !personaje) {
      return res.status(403).json({
        success: false,
        message:
          "No puedes guardar un trasfondo sin título, o vacío, o sin personaje protagonista",
      });
    }
    const trasfondo = new Trasfondo({
      titulo,
      cuerpo,
      personaje,
      otrosPersonajes,
    });
    let miPersonaje = trasfondo.personaje;

 let index = usuario.personajes.indexOf(miPersonaje);
 if (index == -1) {
  console.log(index);
  return res.status(400).json({
     success: false,
   message: "No puedes modificar el trasfondo de un personaje que no es tuyo.",
       });
     }

    const newTrasfondo = await trasfondo.save();

    let trasfondosPropios = await Personaje.findById(personaje);
    trasfondosPropios.trasfondo.push(newTrasfondo._id);
    await trasfondosPropios.save();

    let trasfondosArray = await Personaje.findById(otrosPersonajes);

    if (trasfondosArray) {
      trasfondosArray.otrosTrasfondos.push(newTrasfondo._id);
      await trasfondosArray.save();
    }

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
    let trasfondos = await Trasfondo.find().populate("personaje", "nombre")
      .populate("otrosPersonajes", "nombre");

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

trasfondoRouter.delete("/delete/:id", checkToken, async (req, res) => {
  try {
    const { id } = req.params;
    let trasfondoBuscado = await Trasfondo.findById(id);

    if (!trasfondoBuscado) {
      return res.status(400).json({
        success: false,
        message: "El trasfondo no existe",
      });
    }

      if (!trasfondoBuscado.propietario.equals(req.usuario.id)) {
      return res.status(400).json({
         success: false,
         message: "No puedes borrar algo que no es tuyo. Un poquito de por favor!",
       });
     }


    let personajeBuscado = await Personaje.findById(trasfondoBuscado.personaje);

    let index = personajeBuscado.trasfondo.indexOf(id);
    if (index > -1) {
      personajeBuscado.trasfondo.splice(index, 1);
      await personajeBuscado.save();
    }

    let personajeBuscado2 = await Personaje.findById(
      trasfondoBuscado.otrosPersonajes
    );

    let i = personajeBuscado2.otrosTrasfondos.indexOf(id);
    if (i > -1) {
      personajeBuscado2.otrosTrasfondos.splice(index, 1);
      await personajeBuscado2.save();
    }

    await trasfondoBuscado.deleteOne();

    return res.send({
      sucess: true,
      message: `El trasfondo ha sido borrado.`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

trasfondoRouter.put("/update/:id", checkToken, async (req, res) => {
  try {
    const { id } = req.params;
    let { titulo, cuerpo, personaje, otrosPersonajes } = req.body;
    const trasfondo = await Trasfondo.findById(id);

    let usuario = await Propietario.findById(req.usuario.id);
    let elPersonaje = trasfondo.personaje;
    let index = usuario.personajes.indexOf(elPersonaje);
    

    for (const key in req.body) {  
      if (req.body[key]) {
if(key == "otrosPersonajes" && req.body[key].length > 0){
  trasfondo[key] = [...trasfondo[key], req.body[key]]
  continue
}
if (index == -1) {
  console.log(index);
  return res.status(400).json({
     success: false,
   message: "No seas enterao, No toques lo que  no es tuyo.",
       });
     }


 
        trasfondo[key] = req.body[key];
      }
    }

    const trasfondoActualizado = await trasfondo.save();

    let trasfondosArray = await Personaje.findById(otrosPersonajes);

    if (trasfondosArray) {
      trasfondosArray.otrosTrasfondos.push(trasfondoActualizado);
      await trasfondosArray.save();
    }

    return res.send({
      success: true,
      message: `El trasfondo se modificó correctamente`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});


trasfondoRouter.get("/find/:id", async (req, res) => {
  const {id} = req.params
  try {
    let trasfondo = await Trasfondo.findById(id)
      .populate("personaje", "nombre")
      .populate("otrosPersonajes", "nombre");

    return res.json({
      success: true,
      trasfondo,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

// trasfondoRouter.post("/update/add/:id", checkToken, async (req, res) => {
//   try {
//     const { id } = req.params;
//     let { titulo, cuerpo, personaje, otrosPersonajes } = req.body;
//     const trasfondo = await Trasfondo.findById(id);
//     let personajeAdd = await Personaje.findById(otrosPersonajes);

// console.log(personajeAdd)

//  const trasfondoActualizado = await trasfondo.save();

//    personajeAdd.otrosPersonajes.push(trasfondoActualizado);

// // console.log(otrosPersonajes)
    
//       await trasfondosArray.save();


//     return res.send({
//       success: true,
//       message: `El trasfondo se modificó correctamente`,
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(400).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });



module.exports = trasfondoRouter;
