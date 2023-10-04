import { Request, Response } from "express";
import {
    getAvailableSlotsService,
    setAvailabilityService,
} from "../../Service/Barber/AvaillabilityService";

export const setAvailabilityController = async (
    req: Request,
    res: Response
) => {
    try {
        const { weekday, hours } = req.body;
        const barberId = req.user.id;
        const availability = await setAvailabilityService(
            barberId,
            weekday,
            hours
        );
        res.json(availability);
    } catch (error) {
        res.status(500).json({ error: "Erro ao definir disponibilidade" });
    }
};

export const getAvailableSlotsController = async (
    req: Request,
    res: Response
) => {
    try {
        const { barberId } = req.params;
        console.log(barberId, "id do params");
        const slots = await getAvailableSlotsService(parseInt(barberId));
        res.json(slots);
    } catch (error) {
        res.status(500).json({ error: "Erro ao obter disponibilidade" });
    }
};
