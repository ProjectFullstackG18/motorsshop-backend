import { Request, Response } from "express";
import { listFilterService } from "../services/filters/list.filters.service";

export const listFiltersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const filters = await listFilterService();

  return res.status(200).json(filters);
};
