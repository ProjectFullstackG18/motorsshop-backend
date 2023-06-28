import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Car, Image, User } from "../../entities";

export const createCarService = async (
  newCarData: any,
  userId: string
): Promise<any> => {
  const carsRepo: Repository<Car> = AppDataSource.getRepository(Car);
  const imageRepo: Repository<Image> = AppDataSource.getRepository(Image);
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const { images, ...newCar } = newCarData;
  const seller = await userRepo.findOne({
    where: {
      id: userId,
    },
  });
  const queryCar: Car = carsRepo.create({ ...newCar, user: seller } as Car);

  const car = await carsRepo.save(queryCar);

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
      user: true,
    },
  });

  return carReturn;
};
