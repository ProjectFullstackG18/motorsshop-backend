import { Content } from "mailgen";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities";

export const destroyCommentService = async (
  commentId: string
): Promise<void> => {
  const commentsRepo: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  await commentsRepo.delete({ id: commentId });
};
