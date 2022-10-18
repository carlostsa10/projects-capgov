const knex = require("../bd/conexao");
const { fieldsToProjects } = require("../validacoes/requiredFields");
const { errors, others } = require("../messages/error");

const cadastrarProjeto = async (req, res) => {
  const userLogin = req.user;
  const { title, zip_code, cost, deadline } = req.body;

  const validations = fieldsToProjects({ title, zip_code, cost, deadline });
  if (!validations.ok) {
    return res.status(400).json(validations.message);
  }
  const currentMoment = () => new Date();

  try {
    const criarProjeto = await knex("projects").insert({
      title,
      zip_code,
      cost,
      deadline,
      username: userLogin.username,
      updated_at: currentMoment(),
    });

    if (!criarProjeto) {
      return res.status(400).json(errors.projectCouldNot);
    }

    return res.status(201).json(others.sucessProject);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const projetosUser = async (req, res) => {
  const userLogin = req.user;
  try {
    const getUserProjects = await knex("projects")
      .select("*")
      .where("projects.username", "=", userLogin.username);

    if (!getUserProjects) {
      return res.status(404).json(errors.userProjectsX);
    }
    return res.status(200).json(getUserProjects);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { cadastrarProjeto, projetosUser };
