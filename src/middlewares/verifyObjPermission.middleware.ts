import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { Car } from "../entities";
import { AppDataSource } from "../data-source";

export const verifyObjPermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const carsRepo: Repository<Car> = AppDataSource.getRepository(Car);
  const carReturn = await carsRepo.findOne({
    where: {
      id: req.params.id,
    },
    relations: {
      user: true,
    },
  });

  if (carReturn?.user.id !== req.user.id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
