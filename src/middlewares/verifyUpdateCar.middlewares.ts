import { ICarsUpdate } from "../interfaces/cars";
import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

const verifyUpdateCar =
  (schema: ZodSchema<ICarsUpdate>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    const validatedData = await schema.parseAsync(data);

    req.carsUpdate = validatedData;

    next();
  };

export default verifyUpdateCar;

const a = {
  id: "16e831b8-fb9e-418c-ac99-dcd8640fe704",
  brand: "bmw",
  model: "serie 3 sedan 330i sport gp 2.0 tb flex aut. 4p",
  year: "2018",
  fuel_type: "Flex",
  km: 10000,
  color: "Preto",
  fipe_price: "314750",
  price: 275000,
  description:
    "O BMW Serie 3 Sedan 330i Sport GP é a combinação perfeita de luxo, desempenho e tecnologia. Com um motor potente e eficiente, este sedan oferece uma experiência de condução emocionante. Seu design esportivo e elegante chama a atenção por onde passa. Não perca a oportunidade de ter um BMW Serie 3 incrível!",
  created_at: "2023-06-23T22:11:41.368Z",
  updated_at: "2023-06-23T22:11:41.368Z",
  is_active: true,
  images: [
    {
      id: "f426619c-7647-455a-a714-fb4d148528cd",
      URL: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkuqRv3Z5Jdj0UDQsCOiSO_0uvGhV3gsr7qutU0oSi4AvP70ss",
    },
    {
      id: "3c8711a0-8342-4b26-b5b1-1799c08f3fab",
      URL: "https://www.autossegredos.com.br/wp-content/uploads/2017/07/bmw-serie-3.jpg",
    },
    {
      id: "df77b4ba-9528-45cb-b532-d168cff94c86",
      URL: "https://www.autossegredos.com.br/wp-content/uploads/2017/07/bmw-serie-3-1.jpg",
    },
  ],
  user: {
    id: "18827118-6108-4b81-866f-32c0cbc8628b",
    name: "Flavin Pneu",
    email: "flavin@outlook.com",
    seller: true,
  },
  comments: [
    {
      id: "fdb225c8-52de-4f83-9a9b-f802e2380096",
      comment: "Comentario de teste, por favor funcione! MANEIRO",
      created_at: "2023-06-27T15:03:34.568Z",
      user: {
        id: "18827118-6108-4b81-866f-32c0cbc8628b",
        name: "Flavin Pneu",
        email: "flavin@outlook.com",
        seller: true,
      },
    },
    {
      id: "dd4c6675-c375-44d0-bdb1-c9940ea7797a",
      comment: "Comentario de teste, por favor funcione! UPDATE",
      created_at: "2023-06-27T14:35:05.413Z",
      user: {
        id: "18827118-6108-4b81-866f-32c0cbc8628b",
        name: "Flavin Pneu",
        email: "flavin@outlook.com",
        seller: true,
      },
    },
    {
      id: "ec135766-f547-4534-8556-1d6201352fe3",
      comment: "Comentario de teste, por favor funcione! UPDATE NEWWWWWWWWW",
      created_at: "2023-06-27T15:43:41.530Z",
      user: {
        id: "18827118-6108-4b81-866f-32c0cbc8628b",
        name: "Flavin Pneu",
        email: "flavin@outlook.com",
        seller: true,
      },
    },
  ],
};
