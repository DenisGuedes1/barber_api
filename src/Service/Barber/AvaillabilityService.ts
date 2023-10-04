import { AppDataSource } from "../../data-source";
import { BarberAvailability } from "../../entities/barberAvailability";

const availabilityRepository = AppDataSource.getRepository(BarberAvailability);

export const setAvailabilityService = async (
    barberId: number,
    weekday: number,
    hours: string
) => {
    const availability = availabilityRepository.create({
        id_barber: barberId,
        weekday: weekday,
        hours: hours,
    });

    await availabilityRepository.save(availability);

    return availability;
};

export const getAvailableSlotsService = async (barberId: number) => {
    const slots = await availabilityRepository.find({
        where: { id_barber: barberId },
    });

    return slots;
};
