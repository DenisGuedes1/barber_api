import { Barbers } from "../../entities/barbers";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../Error/handleErrors";
import { TreturnGetBarbers } from "../../Interfaces/Barber/interfacesBarber";

export const GetBarbersService = async () => {
    const barbersRepository = AppDataSource.getRepository(Barbers);

    const barbers = await barbersRepository.find();
    if (barbers) {
        return barbers;
    } else {
        throw new AppError("ops algo deu errado, recarregue a pagina.");
    }
};
