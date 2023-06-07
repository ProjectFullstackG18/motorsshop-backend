import { Request, Response, NextFunction } from "express";

const verifyUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idCarParam = req.params.id;

  const idOwenerCar = "";

  const idUser = req.user.id;

  if (idOwenerCar == idUser) {
    next();
  } else {
    return res.status(403).json({ message: "unauthorized" });
  }
};
export default verifyUserId;
