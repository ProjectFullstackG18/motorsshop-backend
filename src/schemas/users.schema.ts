import { z } from "zod";

const userSchema = z.object({
  name: z.string().max(60),
  email: z.string().email().max(70),
  cpf: z.string().max(11),
  phone: z.string().max(20),
  birthdate: z.string().max(10),
  description: z.string().nullish().optional(),
  cep: z.string().max(10),
  estate: z.string().max(10),
  city: z.string().max(30),
  street: z.string().max(30),
  number: z.string().max(10),
  complement: z.string().nullish().optional(),
  seller: z.boolean(),
  password: z.string().max(150),
});

const userUpdateSchema = userSchema.partial();

const returnUserSchema = userSchema
  .extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
  .omit({ password: true });

  const returnAllUsersSchema = returnUserSchema.array();

  export {userSchema, userUpdateSchema, returnUserSchema, returnAllUsersSchema}