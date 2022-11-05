import express from "express";
import { hash } from "bcrypt";
const app = express();
import cors from "cors";
import { prisma } from "./services/database/prisma";

app.use(cors());
app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  const hashedPassword = await hash(password, 10);

  try {
  await prisma.user.create(
    {
    data: {
      name,
      email,
      password: hashedPassword
    }
    }
  )

    return res.json({
      erro: false,
      mensagem: "Usuário cadastrado com sucesso!",
    });
  } catch {
    return res.status(400).json({
      erro: true,
      mensagem: "deu alguma merda ai, verifica as colunas sla",
    });
  }
});

app.listen(3333, () => {
  console.log("Listening on port 3333");
});
