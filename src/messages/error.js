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
};

const others = {
  signin: "Cadastro realizado com sucesso!",
};
module.exports = { errors, others };
