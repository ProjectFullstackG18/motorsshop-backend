import { Request, Response } from "express";
import { ILoginRequest } from "../interfaces/login";
import { createLoginServices } from "../services";

const createLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: ILoginRequest = req.body;

  const token: string = await createLoginServices(loginData);

  return res.json({
    token: token,
  });
};

export { createLoginController };