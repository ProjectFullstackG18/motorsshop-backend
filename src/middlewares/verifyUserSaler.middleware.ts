import { Request, Response, NextFunction } from "express";

const verifyUserSaler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const saler = req.user.seller;

  if (saler) {
    next();
  }

  return res.status(401).json({ message: "User is not Saler" });
};

export default verifyUserSaler;
