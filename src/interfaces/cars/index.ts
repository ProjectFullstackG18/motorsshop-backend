import { z } from "zod";
import carRetrieveSchema from "../../schemas/cars.schema";

interface ICarsUpdate {
  brand?: string;
  model?: string;
  year?: string;
  fuel_type?: string;
  km?: string;
  color?: string;
  fipe_price?: string;
  price?: string;
  description?: string;
}

export { ICarsUpdate, ICarRetrieve };

type ICarRetrieve = z.infer<typeof carRetrieveSchema>;
