import { Router } from "express";
import {
  createCarController,
  destroyCarController,
  listCarController,
  retrieveCarController,
  updateCarController,
} from "../controllers/cars.controller";
import verifyUserSaler from "../middlewares/verifyUserSaler.middleware";

export const carsRoutes: Router = Router();

carsRoutes.post("", verifyUserSaler, createCarController);
carsRoutes.get("/:id", retrieveCarController);
carsRoutes.get("", listCarController);
carsRoutes.patch("/:id", updateCarController);
carsRoutes.delete("/:id", destroyCarController);
