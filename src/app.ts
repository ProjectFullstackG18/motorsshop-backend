import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import { carsRoutes } from "./routes/cars.routes";

const app: Application = express();
app.use(express.json());

app.use("/cars", carsRoutes);

app.use(handleErrors);

export default app;
