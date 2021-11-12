const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const fs = require("fs");
const mongoose = require("mongoose");
const user = process.env.user;
const password = process.env.password;

const uri = `mongodb+srv://${user}:${password}@cluster0.59iqv.mongodb.net/data?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("conectado a mongodb"))
  .catch(e => console.log(e))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`funcionando en el puerto ${PORT}!`);
});

app.use("/data/juegos", require("./routes/juegoRouter")); 
app.use("/data/usuarios", require("./routes/usuarioRouter"));
app.use("/data/personajes", require("./routes/personajeRouter"));
app.use("/data/trasfondos", require("./routes/trasfondoRouter"));





