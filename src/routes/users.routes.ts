import { Router } from "express";
import {
  createUserController, deleteUserController, edituserController, getAllUsersController, getUserByIdController, resetPassword, sendEmailResetPassword,
} from "../controllers/users.controller";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";
import { verifyDataIsValidMiddleware } from "../middlewares/verifyDataIsValide.middleware";
import { userUpdateSchema } from "../schemas/users.schema";

const userRoutes: Router = Router();

userRoutes.post("", createUserController);
userRoutes.get("", getAllUsersController);
userRoutes.get("/:id",verifyAuthUser, getUserByIdController);
userRoutes.patch("/:id", verifyAuthUser, verifyDataIsValidMiddleware(userUpdateSchema), edituserController);
userRoutes.delete("/:id", verifyAuthUser, deleteUserController);

userRoutes.post("/resetPassword", sendEmailResetPassword );
userRoutes.patch("/resetPassword/:token", resetPassword );
export {userRoutes}