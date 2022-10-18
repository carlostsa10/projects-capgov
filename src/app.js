const app = require("./index");

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
