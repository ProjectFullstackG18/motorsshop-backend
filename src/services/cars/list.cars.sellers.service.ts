import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { IUser } from "../../interfaces/users";

export const listSellerCarsService = async (userId: string): Promise<IUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const getUser: User | null = await userRepository.findOneOrFail({
    where: {
      id: userId,
      cars: {
        is_active: true,
      },
    },
    relations: ["cars", "cars.images"],
  });

  return getUser!;
};
