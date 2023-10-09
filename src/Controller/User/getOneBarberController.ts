import { Request, Response } from "express";
import { getOneBarberService } from "../../Service/Users/getOneBarberService";

export const getOneBarberController = async (req: Request, res: Response) => {
    const id = req.params.id_barber;
    console.log(id, "idbarber");
    const returnSearch = await getOneBarberService(Number(id));

    return res.json(returnSearch).status(201);
};
