import { Request, Response } from "express";
import { GetBarbersService } from "../../Service/Users/getBarbersService";

export const GetBarbersController = async (req: Request, res: Response) => {
    try {
        const barbers = await GetBarbersService();
        return res.json(barbers);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar barbeiros" });
    }
};
