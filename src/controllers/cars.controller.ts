import { Request, Response } from "express";
import {
  createCarService,
  destroyCarService,
  listCarService,
  retrieveCarService,
  updateCarService,
} from "../services";
import { listSellerCarsService } from "../services/cars/list.cars.sellers.service";

export const createCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const carData = req.body;
  const userId = req.user.id;

  const newCar = await createCarService(carData, userId);
  return res.status(201).json(newCar);
};

export const retrieveCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const carId: string = req.params.id;
  const car = await retrieveCarService(carId);

  return res.status(200).json(car);
};

export const listCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const queryParams = req.query;

  const car = await listCarService(queryParams);

  return res.status(200).json(car);
};

export const updateCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const carData = req.body;
  const carId: string = req.params.id;
  const car = await updateCarService(carId, carData);
  return res.status(200).json(car);
};

export const destroyCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const carId = req.params.id;
  await destroyCarService(carId);
  return res.status(204).json();
};

export const listSellerCarsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const sellerId = req.params.id;
  const sellerCars = await listSellerCarsService(sellerId);
  return res.status(200).json(sellerCars);
};
