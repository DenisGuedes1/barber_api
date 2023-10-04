import { loginBarberService } from "../../Service/Barber/LoginBarber";
import { Request, Response } from "express";

export const loginBarberController = async (req: Request, resp: Response) => {
    const data = req.body;

    const login = await loginBarberService(data);

    return resp.json(login).status(200);
};
