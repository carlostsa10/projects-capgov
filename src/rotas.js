const express = require("express");
const { cadastrarUsuario, loginUser } = require("./controladores/usuarios");

const rotas = express();

rotas.post("/users", cadastrarUsuario);
rotas.post("/login", loginUser);

module.exports = rotas;
