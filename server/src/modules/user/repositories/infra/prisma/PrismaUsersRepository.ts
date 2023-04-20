import { User } from "@prisma/client";
import { prisma } from "../../../../../database/prisma";
import { IUsersRepository } from "../../IUsersRepository";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";

class PrismaUsersRepository implements IUsersRepository {
  async create(data: ICreateUserDTO): Promise<User> {
    const { name, email, password } = data;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })
    return user;
  }
}
