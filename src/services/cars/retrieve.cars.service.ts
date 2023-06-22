import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Car } from "../../entities";

export const retrieveCarService = async (carId: string): Promise<Car> => {
  const carsRepo: Repository<Car> = AppDataSource.getRepository(Car);

  const carReturn: Car = await carsRepo.findOneOrFail({
    where: {
      id: carId,
    },
    relations: {
      images: true,
      user: true,
    },
  });

  return carReturn;
};
