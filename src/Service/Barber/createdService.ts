import { AppDataSource } from "../../data-source";
import { Service } from "../../entities/barberService";
import { Barbers } from "../../entities/barbers";

const serviceRepository = AppDataSource.getRepository(Service);

export const createdServiceBarber = async (
    barberId: number,
    serviceName: string,
    price: number
) => {
    const barberRepository = AppDataSource.getRepository(Barbers);
    const barber = await barberRepository.findOne({ where: { id: barberId } });

    if (!barber) {
        throw new Error("Barbeiro não encontrado");
    }

    const newService = serviceRepository.create({
        name: serviceName,
        price: price,
        barbers: [barber],
    });

    await serviceRepository.save(newService);

    return newService;
};
