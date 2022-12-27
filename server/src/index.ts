import express from "express";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
const app = express();
require("dotenv").config();
import { prisma } from "./database/prisma";

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

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
