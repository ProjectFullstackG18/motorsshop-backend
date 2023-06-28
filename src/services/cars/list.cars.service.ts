import { Repository, SelectQueryBuilder } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Car } from "../../entities";

type IQueryParams = {
  brand?: string;
  model?: string;
  color?: string;
  year?: string;
  fuel_type?: string;
  max_price?: number;
  min_price?: number;
  max_km?: number;
  min_km?: number;
  page?: number;
};

export const listCarService = async (
  queryParams: IQueryParams
): Promise<Car[]> => {
  const carsRepo: Repository<Car> = AppDataSource.getRepository(Car);

  const queryBuilder: SelectQueryBuilder<Car> =
    carsRepo.createQueryBuilder("car");
  queryBuilder.where("car.is_active = :isActive", { isActive: true });

  if (queryParams.brand) {
    queryBuilder.andWhere("LOWER(car.brand) = :brand", {
      brand: queryParams.brand.toLowerCase(),
    });
  }

  if (queryParams.model) {
    queryBuilder.andWhere("LOWER(car.model) = :model", {
      model: queryParams.model.toLowerCase(),
    });
  }

  if (queryParams.color) {
    queryBuilder.andWhere("LOWER(car.color) = :color", {
      color: queryParams.color.toLowerCase(),
    });
  }

  if (queryParams.year) {
    queryBuilder.andWhere("car.year = :year", { year: queryParams.year });
  }

  if (queryParams.fuel_type) {
    queryBuilder.andWhere("LOWER(car.fuel_type) = :fuel_type", {
      fuel_type: queryParams.fuel_type.toLowerCase(),
    });
  }

  if (queryParams.max_price !== undefined) {
    queryBuilder.andWhere("car.price <= :maxPrice", {
      maxPrice: queryParams.max_price,
    });
  }

  if (queryParams.min_price !== undefined) {
    queryBuilder.andWhere("car.price >= :minPrice", {
      minPrice: queryParams.min_price,
    });
  }

  if (queryParams.max_km !== undefined) {
    queryBuilder.andWhere("car.km <= :maxKm", { maxKm: queryParams.max_km });
  }

  if (queryParams.min_km !== undefined) {
    queryBuilder.andWhere("car.km >= :minKm", { minKm: queryParams.min_km });
  }

  queryBuilder.leftJoinAndSelect("car.images", "images");
  queryBuilder.leftJoinAndSelect("car.user", "user");

  let skip = queryParams.page ? Number(queryParams.page) * 12 - 12 : 0;
  const take = 12;

  if (queryParams.page == 1) skip = 0;

  if (skip < 0) skip = 0;

  queryBuilder.skip(skip).take(take);

  const carReturn: Car[] = await queryBuilder.getMany();

  return carReturn;
};
