import { userSchema, returnUserSchema, returnAllUsersSchema} from "../../schemas/users.schema";
import { z } from "zod";
import { DeepPartial } from "typeorm";

type IUser = z.infer<typeof userSchema>;
type IUserReturn = z.infer<typeof returnUserSchema>;
type IUserReturnArray = z.infer<typeof returnAllUsersSchema>;
type IUserUpdate = DeepPartial<IUser>;

interface IEmailRequest {
    to: string
    subject: string
    text: string
}
export { IEmailRequest, IUser, IUserReturn, IUserUpdate, IUserReturnArray };
