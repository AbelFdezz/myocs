const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personajeSchema = new Schema({
  nombre: { type: String, required: true },
  juego: { type: mongoose.Types.ObjectId, ref: "Juego" },
  detallesJuego: { type: String },
  estado: { type: String },
  autor: { type: String },
  propietario: { type: mongoose.Types.ObjectId, ref: "Usuario" },
  imagen: { type: String },
  trasfondo: [{ type: mongoose.Types.ObjectId, ref: "Trasfondo" }],
  otrosTrasfondos:[{  type: mongoose.Types.ObjectId, ref: "Trasfondo" }],    //historias en las que aparece!
  edad: { type: Number },
  genero: { type: String },
  idiomas: { type: String },
  lugarNacimiento: { type: String },
  lugarResidencia: { type: String }, //10
  peso: { type: String },
  raza: { type: String },
  colorOjos: { type: String },
  colorPelo: { type: String },
  colorPiel: { type: String },
  gafas: { type: String },
  lentillas: { type: String },
  formaCara: { type: String },
  rasgosDistintivos: { type: String },
  estiloVestimenta: { type: String }, //20
  habitos: { type: String },
  aficiones: { type: String },
  refranFavorito: { type: String },
  formaHablar: { type: String },
  enfermedades: { type: String },
  alergias: { type: String },
  minusvalias: { type: String },
  socioeconomiaPeque: { type: String },
  socioeconomiaActual: { type: String },
  manias: { type: String }, //30
  tics: { type: String },
  estudios: { type: String },
  trabajo: { type: String },
  mascotas: { type: String },
  monturas: { type: String },
  mayorDefecto: { type: String },
  mayorVirtud: { type: String },
  mayorSecreto: { type: String },
  metasLargoPlazo: { type: String },
  loQueMasImporta: { type: String }, //40
  puntoFuerte: { type: String },
  puntoDebil: { type: String },
  manejoIra: { type: Number },
  manejoTristeza: { type: Number },
  manejoConflictos: { type: Number },
  adaptacionCambios: { type: Number },
  adaptacionPerdidas: { type: Number },
  motivaciones: { type: String },
  miedos: { type: String },
  queLeHaceFeliz: { type: String }, //50
  nivelEmpatia: { type: Number },
  religion: { type: String },
  creenciasEspirituales: { type: String },
  padre: { type: String },
  madre: { type: String },
  hermanos: { type: String },
  pareja: { type: String },
  hijos: { type: String },
  amigos: { type: String },
  vecinos: { type: String },
  enemigos: { type: String }, //61
});
module.exports = Personaje = mongoose.model("Personaje", personajeSchema);
