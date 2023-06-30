import { Request, Response } from "express";
import { createCommentService } from "../services/comments/create.comments.service";
import { updateCommentService } from "../services/comments/update.comments.service";
import { destroyCommentService } from "../services/comments/destroy.comments.service";

export const createCommentController = async (req: Request, res: Response) => {
  const { id: carId } = req.params;
  const { id: userId } = req.user;
  const { body: comment } = req;

  const newComment = await createCommentService(comment, carId, userId);
  return res.status(201).json(newComment);
};

export const updateCommentController = async (req: Request, res: Response) => {
  const { id: commentId } = req.params;
  const { body: comment } = req;

  const updatedComment = await updateCommentService(comment, commentId);
  return res.status(200).json(updatedComment);
};

export const destroyCommentController = async (req: Request, res: Response) => {
  const { id: commentId } = req.params;

  await destroyCommentService(commentId);
  return res.status(204).json();
};
