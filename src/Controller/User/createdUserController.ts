import { Request, Response } from "express";
import { createdUserService } from "../../Service/Users/createdUser";

export const createdUserController = async (req: Request, resp: Response) => {
    console.log("rota acessada");
    const data = req.body;
    console.log(data);
    const newUser = await createdUserService(data);

    return resp.status(201).json(newUser);
};
