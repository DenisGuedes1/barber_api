import { AppDataSource } from "../../data-source";
import { Barbers } from "../../entities/barbers";
import { TcreatedBarber } from "../../Interfaces/Barber/interfacesBarber";

import { returnBarberSchema } from "../../Schema/Barber/barberSchema";

export const createdBarberService = async (userData: TcreatedBarber) => {
    const newBarber: Barbers =
        AppDataSource.getRepository(Barbers).create(userData);

    await AppDataSource.getRepository(Barbers).save(newBarber);
    const verifyFields = returnBarberSchema.parse(newBarber);

    return verifyFields;
};
