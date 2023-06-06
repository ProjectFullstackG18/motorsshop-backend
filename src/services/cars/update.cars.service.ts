import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Car } from "../../entities";

export const updateCarService = async (
  carId: string,
  updateCarData: DeepPartial<Car>
): Promise<Car> => {
  const carsRepo: Repository<Car> = AppDataSource.getRepository(Car);
  await carsRepo.update(carId, updateCarData);

  const carReturn: Car = await carsRepo.findOneOrFail({
    where: { id: carId },
    relations: {
      images: true,
    },
  });

  return carReturn;
};
