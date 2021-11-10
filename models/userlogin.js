let mongoose = require("mongoose");

let loginSchema = new mongoose.Schema({
username: { type: String, unique: true},
password: { type: String},
nombre : String,
Apellido: String
});

let Login = mongoose.model("myLogin", loginSchema);

// module.exports = Login;
module.exports =Login  = mongoose.model("Login", loginSchema);