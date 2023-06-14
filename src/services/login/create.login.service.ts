import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { ILoginRequest, ILoginResult } from "../../interfaces/login";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import Jwt from "jsonwebtoken";
import "dotenv/config";

const createLoginServices = async (
  loginData: ILoginRequest
): Promise<ILoginResult> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!findUser) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch: boolean = await compare(
    loginData.password,
    findUser.password
  );

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = Jwt.sign(
    {
      seller: findUser.seller,
      email: findUser.email,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: String(findUser.id),
    }
  );

  return token;
};

export { createLoginServices };