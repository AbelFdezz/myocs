const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Hello World!");
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.post("/create", (req, res) => {
  let { nombre, poblacion } = req.body;

  let obj = {
    nombre,
    poblacion,
  };

  fs.writeFile(`./data/${Date.now()}.json`, JSON.stringify(obj), (err) => {
    if (err) {
      console.error(err);
      return res.status(403).send({
        sucess: false,
        message: err,
      });
    }

    return res.status(201).send({
      sucess: true,
      message: "Creado correctamente",
    });
  });
});

app.get("/info/:ms", (req, res) => {
  let param = req.params.ms;

  fs.readFile(`./data/${param}.json`, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(JSON.parse(data));
    console.log(data);
  });
});
