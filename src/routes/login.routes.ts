import { Router } from "express";
import { createLoginController } from "../controllers/login.controller";
import { verifyDataIsValidMiddleware } from "../middlewares/verifyDataIsValide.middleware";
import { createLoginSchema } from "../schemas/login.schema";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  verifyDataIsValidMiddleware(createLoginSchema),
  createLoginController
);

export { loginRoutes };