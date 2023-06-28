import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { Car } from "../entities";
import { AppDataSource } from "../data-source";

const objPermission = async (
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

  console.log(carReturn?.user.id !== req.user.id);
  if (carReturn?.user.id !== req.user.id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
export default objPermission;
