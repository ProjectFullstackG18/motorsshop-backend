import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { Repository } from "typeorm";
import { AppError } from "../error";

export const verifyUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;

  const usersRepo: Repository<User> = AppDataSource.getRepository(User);
  const exist: boolean = await usersRepo.exist({ where: { id: userId } });
  if (exist) {
    return next();
  }

  throw new AppError("User not found", 404);
};
