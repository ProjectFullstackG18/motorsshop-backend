import { Router } from "express";
import {
  createCarController,
  destroyCarController,
  listCarController,
  listSellerCarsController,
  retrieveCarController,
  updateCarController,
} from "../controllers/cars.controller";
import verifyUserSaler from "../middlewares/verifyUserSaler.middleware";
import { carsSchema } from "../schemas/cars.schema";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";
import { verifyDataIsValidMiddleware } from "../middlewares/verifyDataIsValide.middleware";
import { verifyObjPermission } from "../middlewares/verifyObjPermission.middleware";
import { verifyUserId } from "../middlewares/verifyUserId.middlewares";
import { verifyCarId } from "../middlewares/verifyCarId.middlewares";
import {
  createCommentController,
  destroyCommentController,
  updateCommentController,
} from "../controllers/comments.controller";
import { commentSchema } from "../schemas/comments.schema";
import { verifyCommentPermission } from "../middlewares/verifyCommentPermission.middleware";

export const carsRoutes: Router = Router();

carsRoutes.post(
  "",
  verifyAuthUser,
  verifyUserSaler,
  verifyDataIsValidMiddleware(carsSchema),
  createCarController
);
carsRoutes.post(
  "/:id/comments",
  verifyAuthUser,
  verifyCarId,
  verifyDataIsValidMiddleware(commentSchema),
  createCommentController
);
carsRoutes.patch(
  "/comments/:id",
  verifyAuthUser,
  verifyDataIsValidMiddleware(commentSchema),
  verifyCommentPermission,
  updateCommentController
);
carsRoutes.delete(
  "/comments/:id",
  verifyAuthUser,
  verifyCommentPermission,
  destroyCommentController
);
carsRoutes.get("/seller/:id", verifyUserId, listSellerCarsController);
carsRoutes.get("", listCarController);
carsRoutes.get("/:id", verifyCarId, retrieveCarController);
carsRoutes.put(
  "/:id",
  verifyAuthUser,
  verifyUserSaler,
  verifyObjPermission,
  verifyDataIsValidMiddleware(carsSchema),
  updateCarController
);
carsRoutes.delete(
  "/:id",
  verifyAuthUser,
  verifyCarId,
  verifyUserSaler,
  verifyObjPermission,
  destroyCarController
);
