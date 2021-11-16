const jwt = require("jsonwebtoken");
const {JWT_SECRET} = process.env;

let checkToken = (req, res, next) => {
  let token = req.headers["x-acces-token"] || req.headers["authorization"];

  if (token && token.startsWith("Bearer")) {
    token = token.slice(7, token.length);
  }

  if (!token) {
    return res.status(401).json({
      sucess: false,
      message: "Token no enviado",
    });
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        sucess: false,
        message: "Token no válido",
      });
    }
req.usuario = decoded;
next();

  });
};

module.exports = { checkToken };
