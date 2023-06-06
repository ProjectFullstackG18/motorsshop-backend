import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Car } from "../../entities";

export const listCarService = async (): Promise<Car[]> => {
  const carsRepo: Repository<Car> = AppDataSource.getRepository(Car);

  const carReturn: Car[] = await carsRepo.find({
    relations: {
      images: true,
    },
  });

  return carReturn;
};
