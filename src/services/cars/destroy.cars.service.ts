import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Car } from "../../entities";

export const destroyCarService = async (carId: string): Promise<void> => {
  const carsRepo: Repository<Car> = AppDataSource.getRepository(Car);
  await carsRepo.delete({ id: carId });
};
