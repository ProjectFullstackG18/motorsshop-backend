import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { IUserReturnArray } from "../../interfaces/users";
import { returnAllUsersSchema } from "../../schemas/users.schema";

const getAllUsersServices = async (): Promise<IUserReturnArray> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const getAllUsers: Array<User> = await userRepository.find();

  const returnAllUsers: IUserReturnArray =
    returnAllUsersSchema.parse(getAllUsers);

  return returnAllUsers;
};

export { getAllUsersServices };