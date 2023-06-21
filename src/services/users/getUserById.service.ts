import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { IUser } from "../../interfaces/users";

const getUserByIdServices = async (userId: string): Promise<IUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const getUser: User | null = await userRepository.findOneOrFail({
    where: {
      id: userId,
    },
    relations: ["cars", "cars.images"], // Incluindo as relações "cars" e "cars.images"
  });
  //   const returnUser: IUser = returnAllUsersSchema.parse(getUser);
  console.log(getUser);
  return getUser!;
};

export { getUserByIdServices };
