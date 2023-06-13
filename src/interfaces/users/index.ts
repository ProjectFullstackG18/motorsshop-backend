import { userSchema, returnUserSchema} from "../../schemas/users.schema";
import { z } from "zod";
import { DeepPartial } from "typeorm";

type IUser = z.infer<typeof userSchema>;
type IUserReturn = z.infer<typeof returnUserSchema>;
type IUserUpdate = DeepPartial<IUser>;

export { IUser, IUserReturn, IUserUpdate };



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