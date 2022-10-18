const express = require("express");
const { cadastrarProjeto, projetosUser } = require("./controladores/projetos");
const { cadastrarUsuario, loginUser } = require("./controladores/usuarios");
const { authorizationToken } = require("./middlewares/tokenNeeded");

const rotas = express();

rotas.post("/users", cadastrarUsuario);
rotas.post("/login", loginUser);

rotas.use(authorizationToken);

rotas.post("/project", cadastrarProjeto);
rotas.get("/projects", projetosUser);

module.exports = rotas;
