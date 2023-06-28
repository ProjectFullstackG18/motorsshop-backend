import { AppDataSource } from "../../data-source";
import { Car, User, Comment } from "../../entities";

export const createCommentService = async (
  comment: any,
  carId: string,
  userId: string
) => {
  const usersRepo = AppDataSource.getRepository(User);
  const carsRepo = AppDataSource.getRepository(Car);
  const commentsRepo = AppDataSource.getRepository(Comment);

  const user = await usersRepo.findOneBy({ id: userId });
  const car = await carsRepo.findOneBy({ id: carId });

  const commentQuery = commentsRepo.create({
    ...comment,
    user: user,
    car: car,
  });

  const newComment = await commentsRepo.save(commentQuery);

  return newComment;
};
