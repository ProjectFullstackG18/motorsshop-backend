import { z } from "zod";

export const carsSchema = z.object({
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

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  seller: z.boolean(),
});

const imageSchema = z.object({
  id: z.string(),
  URL: z.string().url(),
});

const commentSchema = z.object({
  id: z.string(),
  comment: z.string(),
  created_at: z.any(),
  user: userSchema,
});

const carSchema = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel_type: z.string(),
  km: z.number(),
  color: z.string(),
  fipe_price: z.string(),
  price: z.number(),
  description: z.string(),
  created_at: z.any(),
  updated_at: z.any(),
  is_active: z.boolean(),
  images: z.array(imageSchema),
  user: userSchema,
  comments: z.array(commentSchema),
});

export default carSchema;
