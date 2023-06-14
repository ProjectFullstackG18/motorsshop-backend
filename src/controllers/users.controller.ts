import { Request, Response } from "express";
import { createUserService } from "../services/users/create.user.service";
import { IUserReturn, IUserReturnArray, IUserUpdate } from "../interfaces/users";
import { getAllUsersServices } from "../services/users/getAllUsers.service";
import { editUserServices } from "../services/users/editUser.service";
import { deleteUserServices } from "../services/users/delete.user.service";
import { getUserByIdServices } from "../services/users/getUserById.service";

  const createUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userData = req.body;
  
    const newUser= await createUserService(userData);
    return res.status(201).json(newUser);
  };

  const getAllUsersController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const AllUsers: IUserReturnArray = await getAllUsersServices();
  
    return res.status(200).json(AllUsers);
  };

  export const getUserByIdController = async (req: Request, res: Response): Promise<Response> => {
    const userId: string = req.user.id
    const user = await getUserByIdServices(userId)
    return res.status(200).json(user)
  }
  
  const edituserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const loggedUserId: string = req.user.id;
    const userId: string = req.params.id;
    const userData: IUserUpdate = req.body;
  
    const updatedUser: IUserReturn | undefined = await editUserServices(
      loggedUserId,
      userId,
      userData
    );
  
    return res.status(200).json(updatedUser);
  };
  
  const deleteUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userId: string = req.params.id;
  
    await deleteUserServices(userId);
  
    return res.status(204).send();
  };
  
  export {
    createUserController,
    getAllUsersController,
    edituserController,
    deleteUserController,
  };