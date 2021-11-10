const express = require("express");
const loginRouter = express.Router();
const Login = require("../models/userlogin");

loginRouter.post("/", async (req, res) => {
  try {
    let { username, password, nombre, apellido } = req.body;


    if (!username || !password || !nombre || !apellido) {
      return res.status(403).json({
        success: false,
        message: "Falta información necesaria.",
      });
    }
    const login = new Login({
      username,
      password,
      nombre,
      apellido
    });
    
    const newLogin = await login.save();
    console.log(login)
    return res.status(201).json({
      success: true,
      trasfondo: newLogin,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      message: err.message || err._message,
    });
  }
});

module.exports = loginRouter;