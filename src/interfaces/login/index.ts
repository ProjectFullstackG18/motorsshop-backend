import { z } from "zod";
import { createLoginSchema } from "../../schemas/login.schema";

type ILoginRequest = z.infer<typeof createLoginSchema>;
type ILoginResult = string;

export { ILoginRequest, ILoginResult };
