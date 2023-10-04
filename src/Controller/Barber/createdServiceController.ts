import { Request, Response } from "express";
import { createdServiceBarber } from "../../Service/Barber/createdService";

export const createdServiceController = async (req: Request, res: Response) => {
    try {
        const { serviceName, price } = req.body;
        console.log("rota acessada");
        const barberId = req.user.id;
        if (!barberId) {
            return res.status(401).json({ error: "Usuário não autenticado" });
        }
        console.log(barberId, "iduserloggo");
        console.log("data", req.body);
        const newService = await createdServiceBarber(
            barberId,
            serviceName,
            price
        );
        return res.json(newService);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao adicionar serviço" });
    }
};
