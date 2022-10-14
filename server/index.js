const express = require("express");
const app = express();
const cors = require("cors");

const User = require("./models/User");
const database = require("./models/db");

app.use(cors());
app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  await User.create({
    nome: name,
    email: email,
    senha: password,
  })
    .then(() => {
      return res.json({
        erro: false,
        mensagem: "Usuário cadastrado com sucesso!",
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: Usuário não foi cadastrado com sucesso!",
      });
    });
});

app.listen(3333, () => {
  console.log("Listening on port 3333");
});
