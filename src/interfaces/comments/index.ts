import { commentSchema } from "../../schemas/comments.schema";
import { z } from "zod";

type IComment = z.infer<typeof commentSchema>;

export { IComment };
