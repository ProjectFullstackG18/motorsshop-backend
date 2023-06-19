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
import { carsSchema } from "../schemas/cars.schema";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";

export const carsRoutes: Router = Router();

carsRoutes.post("", verifyAuthUser, verifyUserSaler, createCarController);
carsRoutes.get("/:id", retrieveCarController);
carsRoutes.get("", listCarController);
carsRoutes.put("/:id", verifyUpdateCar(carsSchema), updateCarController);
carsRoutes.delete("/:id", destroyCarController);
