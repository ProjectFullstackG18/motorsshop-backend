import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Car } from "../../entities";

export const listFilterService = async (): Promise<any> => {
  const carsRepo: Repository<Car> = AppDataSource.getRepository(Car);

  const brands = await carsRepo
    .createQueryBuilder("car")
    .select("DISTINCT LOWER(car.brand)", "brand")
    .getRawMany();

  const models = await carsRepo
    .createQueryBuilder("car")
    .select("DISTINCT LOWER(car.model)", "model")
    .getRawMany();

  const colors = await carsRepo
    .createQueryBuilder("car")
    .select("DISTINCT LOWER(car.color)", "color")
    .getRawMany();

  const years = await carsRepo
    .createQueryBuilder("car")
    .select("DISTINCT LOWER(car.year)", "year")
    .getRawMany();

  const fuelTypes = await carsRepo
    .createQueryBuilder("car")
    .select("DISTINCT LOWER(car.fuel_type)", "fuel_type")
    .getRawMany();

  const brandList = brands.map((brand) => brand.brand);
  const modelList = models.map((model) => model.model);
  const colorList = colors.map((color) => color.color);
  const yearList = years.map((year) => year.year);
  const fuelTypesList = fuelTypes.map((type) => type.fuel_type);

  return {
    brands: brandList,
    models: modelList,
    colors: colorList,
    years: yearList,
    fuel_types: fuelTypesList,
  };
};
