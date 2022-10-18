# Organização de projetos

## Criação de usuário

`POST /users`
  A rota deve receber name, password e username dentro do corpo da requisição. Ao cadastrar um novo usuário, ele deve ser armazenado dentro de um objeto no seguinte formato:

``
{
id: 'uuid',
name: 'João Silva',
username: 'joao.silva',
password: '********',
}
``
