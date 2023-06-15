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
import objPermission from "../middlewares/objPermission.middleware";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";

export const carsRoutes: Router = Router();

carsRoutes.post("", verifyAuthUser, verifyUserSaler, createCarController);
carsRoutes.get("/:id", retrieveCarController);
carsRoutes.get("", listCarController);
carsRoutes.patch(
  "/:id",
  objPermission,
  verifyUpdateCar(updateCarsSchema),
  updateCarController
);
carsRoutes.delete("/:id", objPermission, destroyCarController);
