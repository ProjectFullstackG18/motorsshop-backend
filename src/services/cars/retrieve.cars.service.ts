import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Car } from "../../entities";
import carRetrieveSchema from "../../schemas/cars.schema";
import { ICarRetrieve } from "../../interfaces/cars";

export const retrieveCarService = async (
  carId: string
): Promise<ICarRetrieve> => {
  const carsRepo: Repository<Car> = AppDataSource.getRepository(Car);

  const carReturn: Car = await carsRepo.findOneOrFail({
    where: {
      id: carId,
    },
    relations: ["images", "user", "comments", "comments.user"],
  });
  console.log(carReturn);
  return carRetrieveSchema.parse(carReturn);
};
