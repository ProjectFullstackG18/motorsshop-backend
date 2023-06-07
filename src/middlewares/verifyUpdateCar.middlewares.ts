import { ICarsUpdate } from "../interfaces/cars";
import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

const verifyUpdateCar =
  (schema: ZodSchema<ICarsUpdate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    const validatedData = await schema.parseAsync(data);

    req.carsUpdate = validatedData;

    next();
  };

export default verifyUpdateCar;
