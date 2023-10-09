import { Barbers } from "../../entities/barbers";
import { AppDataSource } from "../../data-source";

export const getOneBarberService = async (idBarber: number) => {
    const repository = AppDataSource.getRepository(Barbers);

    try {
        const find = await repository.find({
            where: { id: idBarber },
            relations: [
                "services",
                "appointments",
                "testimonies",
                "photos",
                "availability",
            ],
        });
        //          const find = await repository
        //   .findOneOrFail(idBarber, {
        //     relations: ['services', 'appointments', 'testimonies', 'photos', 'availability'],
        //   })

        if (!find) {
            throw new Error(`Nenhum barbeiro encontrado com o ID ${idBarber}`);
        }

        return find;
    } catch (error: any) {
        throw new Error(`Erro ao buscar o barbeiro: ${error.message}`);
    }
};
