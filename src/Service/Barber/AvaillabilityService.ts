import { AppDataSource } from "../../data-source";
import { BarberAvailability } from "../../entities/barberAvailability";
import { Barbers } from "../../entities/barbers";

const availabilityRepository = AppDataSource.getRepository(BarberAvailability);
const barberRepository = AppDataSource.getRepository(Barbers);
export const setAvailabilityService = async (
    barberId: number,
    weekday: number,
    hours: string
) => {
    const barber = await barberRepository.findOne({ where: { id: barberId } });
    console.log(barber, "controller barber");
    if (!barber) {
        throw new Error(`Barbeiro com o ID ${barberId} não encontrado.`);
    }
    const availability = availabilityRepository.create({
        barber: barber,
        weekday: weekday,
        hours: hours,
    });

    await availabilityRepository.save(availability);

    return availability;
};

export const getAvailableSlotsService = async (barberId: number) => {
    const slots = await availabilityRepository.find({
        where: { barber: { id: barberId } },
    });

    return slots;
};
