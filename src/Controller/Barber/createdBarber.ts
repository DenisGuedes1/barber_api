import { createdBarberService } from "../../Service/Barber/createdBarber";
import { Request, Response } from "express";

export const createdBarberController = async (req: Request, resp: Response) => {
    console.log("rota acessada");
    const data = req.body;
    console.log(data);
    const newUser = await createdBarberService(data);

    return resp.status(201).json(newUser);
};
