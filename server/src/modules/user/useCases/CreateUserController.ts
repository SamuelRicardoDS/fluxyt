import { Request, Response } from "express";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { } = req.body


    return res.status(201).json({  })
  }
}

export { CreateUserController }