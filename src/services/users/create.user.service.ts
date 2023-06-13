import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user/user.entity";
import { IUser, IUserReturn } from "../../interfaces/users";
import { AppError } from "../../error";
import { returnUserSchema } from "../../schemas/users.schema";

export const createUserService = async (userData: IUser): Promise<IUserReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);


  const verifyEmailExists: User | null = await userRepository.findOne({
    where: {
      email: userData.email,
    },
  });

  const verifyCpfExists: User | null = await userRepository.findOne({
    where: {
      cpf: userData.cpf,
    },
  });

  if (verifyEmailExists) {
    throw new AppError("Email already exists", 409);
  }

  if(verifyCpfExists){
    throw new AppError("Cpf already exists", 409);
  }

  const createUser: User = userRepository.create(userData);

  await userRepository.save(createUser);

  const newUser: IUserReturn = returnUserSchema.parse(createUser);

  return newUser;
};