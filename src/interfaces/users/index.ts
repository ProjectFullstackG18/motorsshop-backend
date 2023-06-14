import { userSchema, returnUserSchema, returnAllUsersSchema} from "../../schemas/users.schema";
import { z } from "zod";
import { DeepPartial } from "typeorm";

type IUser = z.infer<typeof userSchema>;
type IUserReturn = z.infer<typeof returnUserSchema>;
type IUserReturnArray = z.infer<typeof returnAllUsersSchema>;
type IUserUpdate = DeepPartial<IUser>;

export { IUser, IUserReturn, IUserUpdate, IUserReturnArray };



// interface IUser{
//     id: string;
//     name: string
//     email: string;
//     cpf: string;
//     phone: string;
//     birthdate: string;
//     description?: string;
//     cep: string;
//     state: string;
//     city: string;
//     street: string;
//     number: string;
//     complement?: string
//     seller: boolean;
//     password: string;
//     created_At: string;
//     updatedAt: string;
// }