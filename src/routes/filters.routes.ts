import { Router } from "express";

import { listFiltersController } from "../controllers/filter.controller";

export const filtersRoutes: Router = Router();

filtersRoutes.get("", listFiltersController);
