import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import { carsRoutes } from "./routes/cars.routes";
import { userRoutes } from "./routes/users.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/cars", carsRoutes);

app.use(handleErrors);

export default app;
