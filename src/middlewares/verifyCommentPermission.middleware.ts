import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { Comment } from "../entities";
import { AppDataSource } from "../data-source";

export const verifyCommentPermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const commentRepo: Repository<Comment> = AppDataSource.getRepository(Comment);
  const commentReturn = await commentRepo.findOne({
    where: {
      id: req.params.id,
    },
    relations: {
      user: true,
    },
  });

  if (commentReturn?.user.id !== req.user.id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
