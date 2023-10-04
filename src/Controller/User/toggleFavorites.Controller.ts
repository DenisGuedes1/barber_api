import { Request, Response } from "express";
import { toggleFavoriteService } from "../../Service/Users/toggleFavorites.Service";

export const toggleFavoriteController = async (req: Request, res: Response) => {
    try {
        const barberId = req.body.id_barber;
        const userId = req.user.id;
        console.log(userId, barberId, "id da request");
        const result = await toggleFavoriteService(userId, barberId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Erro interno no servidor" });
    }
};
