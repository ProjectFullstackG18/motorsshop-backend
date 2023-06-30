import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Car, Image } from "../../entities";

export const updateCarService = async (
  carId: string,
  updateCarData: any
): Promise<Car> => {
  const carsRepo: Repository<Car> = AppDataSource.getRepository(Car);
  const imageRepo: Repository<Image> = AppDataSource.getRepository(Image);

  const { images, ...carData } = updateCarData;

  await imageRepo.delete({ car: { id: carId } });

  const car: Car = await carsRepo.findOneByOrFail({
    id: carId,
  });

  for (const imageURL of images) {
    const newImage = imageRepo.create({
      URL: imageURL,
      car: car,
    });
    await imageRepo.save(newImage);
  }

  await carsRepo.update(carId, carData);

  const carReturn: Car = await carsRepo.findOneOrFail({
    where: { id: carId },
    relations: {
      images: true,
    },
  });

  return carReturn;
};
