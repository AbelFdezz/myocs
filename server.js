const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const user = process.env.user;
const password = process.env.password;
const path = require("path")

const uri = `mongodb+srv://${user}:${password}@cluster0.59iqv.mongodb.net/data?retryWrites=true&w=majority`; //guardar en el .env

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("conectado a MongoDB"))
  .catch(e => console.log(e))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.use("/data/juegos", require("./routes/juegoRouter")); 
app.use("/data/usuarios", require("./routes/usuarioRouter"));
app.use("/data/personajes", require("./routes/personajeRouter"));
app.use("/data/trasfondos", require("./routes/trasfondoRouter"));
app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`funcionando en el puerto ${PORT}!`);
});





