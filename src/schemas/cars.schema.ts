import { z } from "zod";

const CarsSchema = z.object({
  brand: z.string().max(30),
  model: z.string().max(60),
  year: z.string().max(4),
  fuel_type: z.string().max(60),
  km: z.string().max(8),
  color: z.string().max(60),
  fipe_price: z.string().max(60),
  price: z.string().max(60),
  description: z.string(),
  is_active: z.boolean().default(true),
});

const returnCarsSchema = CarsSchema.extend({
  id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export { CarsSchema, returnCarsSchema };
