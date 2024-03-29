import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import { carsRoutes } from "./routes/cars.routes";
import { userRoutes } from "./routes/users.routes";
import { loginRoutes } from "./routes/login.routes";
import { filtersRoutes } from "./routes/filters.routes";

const app: Application = express();
const cors = require("cors");
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(cors());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/cars", carsRoutes);
app.use("/filters", filtersRoutes);

app.use(handleErrors);

export default app;
