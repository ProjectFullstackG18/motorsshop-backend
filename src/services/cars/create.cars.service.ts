import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Car, Image } from "../../entities";

export const createCarService = async (newCarData: any): Promise<any> => {
  const carsRepo: Repository<Car> = AppDataSource.getRepository(Car);
  const imageRepo: Repository<Image> = AppDataSource.getRepository(Image);

  const { images, ...newCar } = newCarData;

  const queryCar: Car = carsRepo.create(newCar as Car);

  const car = await carsRepo.save(queryCar);

  //   images.forEach(async (imageURL: string) => {
  //     const newImage = imageRepo.create({
  //       URL: imageURL,
  //       car: car,
  //     });
  //     await imageRepo.save(newImage);
  //   });

  for (const imageURL of images) {
    const newImage = imageRepo.create({
      URL: imageURL,
      car: car,
    });
    await imageRepo.save(newImage);
  }

  const carReturn: Car = await carsRepo.findOneOrFail({
    where: { id: car.id },
    relations: {
      images: true,
    },
  });

  return carReturn;
};
