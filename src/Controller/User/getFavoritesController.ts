import { FavoriteService } from "../../Service/Users/getFavoriteService";
import { Request, Response } from "express";

const favoriteService = new FavoriteService();

export const getFavorites = async (req: Request, res: Response) => {
    const loggedUserId = req.user.id;
    try {
        const favorites = await favoriteService.getFavorites(
            Number(loggedUserId)
        );
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ error: "Erro ao obter favoritos" });
    }
};
