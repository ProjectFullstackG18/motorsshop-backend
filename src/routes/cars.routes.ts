import { Router } from "express";
import {
  createCarController,
  destroyCarController,
  listCarController,
  retrieveCarController,
  updateCarController,
} from "../controllers/cars.controller";
import verifyUserSaler from "../middlewares/verifyUserSaler.middleware";
import verifyUpdateCar from "../middlewares/verifyUpdateCar.middlewares";
import { updateCarsSchema } from "../schemas/cars.schema";

export const carsRoutes: Router = Router();

carsRoutes.post("", verifyUserSaler, createCarController);
carsRoutes.get("/:id", retrieveCarController);
carsRoutes.get("", listCarController);
carsRoutes.patch(
  "/:id",
  verifyUpdateCar(updateCarsSchema),
  updateCarController
);
carsRoutes.delete("/:id", destroyCarController);
