import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Car } from "../entities";
import { Repository } from "typeorm";
import { AppError } from "../error";

export const verifyCarId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const carId = req.params.id;

  const carsRepo: Repository<Car> = AppDataSource.getRepository(Car);
  const exist: boolean = await carsRepo.exist({ where: { id: carId } });
  if (exist) {
    return next();
  }

  throw new AppError("Car not found", 404);
};
