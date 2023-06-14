import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";
import { IUserReturn, IUserUpdate } from "../../interfaces/users";
import { returnUserSchema } from "../../schemas/users.schema";

const editUserServices = async (
  loggedUserId: string,
  userId: string,
  userData: IUserUpdate
): Promise<IUserReturn | undefined> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const verifyLoggedUserIsOwner: User | null = await userRepository.findOne({
    where: {
      id: loggedUserId,
    },
  });
 
    const oldUserData: User | null = await userRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (oldUserData?.id === verifyLoggedUserIsOwner?.id) {
      const updatingUser: User = userRepository.create({
        ...oldUserData,
        ...userData,
      });

      await userRepository.save(updatingUser);

      const updatedUser: IUserReturn = returnUserSchema.parse(updatingUser);

      return updatedUser;
    } else {
      throw new AppError("Insufficient permission", 403);
    }
};

export { editUserServices };