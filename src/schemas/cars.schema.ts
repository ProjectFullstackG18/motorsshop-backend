import { z } from "zod";

const carsSchema = z.object({
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
  images: z.array(z.string()),
});

const returnCarsSchema = carsSchema.extend({
  id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

const updateCarsSchema = z.object({
  brand: z.string().max(30),
  model: z.string().max(60),
  year: z.string().max(4),
  fuel_type: z.string().max(60),
  km: z.string().max(8),
  color: z.string().max(60),
  fipe_price: z.string().max(60),
  price: z.string().max(60),
  description: z.string(),
  images: z.array(z.string()),
});

export { carsSchema, returnCarsSchema, updateCarsSchema };
