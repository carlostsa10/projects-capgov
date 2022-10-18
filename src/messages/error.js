const errors = {
  userExists: "Já existe um usuário cadastrado com o username informado.",
  couldNotSignin: "Não foi possivel cadastrar o usuário.",
  loginIncorrect: "Email ou senha incorretos.",
  userNotFound: "Usuário não encontrado.",
  nameX: "O Campo nome é obrigatorio.",
  usernameX: "O Campo username é obrigatorio.",
  passwordX: "O Campo senha é obrigatorio.",
  addressX: "O Campo endereço é obrigatório.",
  wrongType: "O tipo indicado não existe.",
  tokenX:
    "Para acessar este recurso um token de autenticação válido deve ser enviado.",
  userUpdate: "Não foi possível atualizar o usuário",
  userDelete: "Não foi possível deletar o usuário.",
  authorizationX: "O usuário precisa estar logado!",
  accountX: "É preciso ter uma conta válida para acessar estes recursos.",
  titleX: "O título do projeto é obrigatório.",
  zipcodeX: "O CEP destinado ao projeto é obrigatório.",
  costX: "O valor destinado ao projeto é obrigatório.",
  deadlineX: "A data final do projeto deve ser especificada",
  projectCouldNot: "Não foi possível criar o projeto.",
  userProjectsX: "O usuário não possui projetos cadastrados.",
};

const others = {
  signin: "Cadastro realizado com sucesso!",
  sucessProject: "Parabéns! Você fez um descarte consciente!",
};
module.exports = { errors, others };
