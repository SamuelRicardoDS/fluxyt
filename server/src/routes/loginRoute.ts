/* import { compare } from "bcrypt";
import { Application, Router } from "express";
import { prisma } from "../../services/database/prisma";
import jwt from "jsonwebtoken";

export const userRoutes = Router()

userRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return res.json({
      erro: false,
      mensagem: "Usuário logado!",
      });
}) */