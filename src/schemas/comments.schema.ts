import z from "zod";
import userSchema from "./cars.schema";

export const commentSchema = z.object({
  comment: z.string(),
});

export const commentReturnSchema = z.object({
  id: z.string(),
  comment: z.string(),
  created_at: z.string(),
  user: userSchema,
});
