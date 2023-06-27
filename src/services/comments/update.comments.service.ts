import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities";

export const updateCommentService = async (comment: any, commentId: string) => {
  const commentsRepo = AppDataSource.getRepository(Comment);
  await commentsRepo.update(commentId, comment);
  const commentRetur = await commentsRepo.findOneByOrFail({ id: commentId });
  return commentRetur;
};
