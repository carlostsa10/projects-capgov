const env = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const knex = require("../bd/conexao");
const { errors, others } = require("../messages/error");
const { fieldsToUser } = require("../validacoes/requiredFields");
const jwtSecret = process.env.JWT_SECRET;

const cadastrarUsuario = async (req, res) => {
  const { name, username, password } = req.body;
  const validarUsuario = fieldsToUser({ name, username, password });

  if (!validarUsuario.ok) {
    return res.status(400).json(validarUsuario.message);
  }

  try {
    const getUsername = await knex("users").where({ username }).first();

    if (getUsername) {
      return res.status(400).json(errors.userExists);
    }

    const SALT = 10;
    const hash = await bcrypt.hash(password, SALT);

    const getUser = await knex("users").insert({
      name,
      username,
      password: hash,
    });

    if (!getUser) {
      return res.status(400).json(errors.couldNotSignin);
    }

    return res.status(201).json(others.signin);
  } catch (error) {
    return res.status(500).json({ mensagem: `Erro interno ${error.message}` });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const validations = fieldsToLogin({ username, password });

  if (!validations.ok) {
    return res.status(400).json(validations.message);
  }

  try {
    const getUser = await knex("users").where({ username }).first();

    if (!getUser) {
      return res.status(400).json(errors.loginIncorrect);
    }

    const correctPassword = await bcrypt.compare(password, getUser.password);
    if (!correctPassword) {
      return res.status(400).json(errors.loginIncorrect);
    }

    const token = jwt.sign(
      {
        id: getUser.id,
      },
      jwtSecret,
      {
        expiresIn: "800h",
      }
    );

    return res.json({
      user: {
        id: getUser.id,
        name: getUser.name,
        username: getUser.username,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  cadastrarUsuario,
  loginUser,
};
