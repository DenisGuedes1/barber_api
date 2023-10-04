import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Barbers } from "../../entities/barbers";
import { AppError } from "../../Error/handleErrors";
import { TloginBarber } from "../../Interfaces/Barber/interfacesBarber";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export const loginBarberService = async (loginData: TloginBarber) => {
    const userRepository = AppDataSource.getRepository(Barbers);
    const user = await userRepository.findOne({
        where: { email: loginData.email },
    });

    if (!user) {
        throw new AppError("wrong email or password", 401);
    }

    const matchPasswrord: boolean = await compare(
        loginData.password,
        user.password
    );
    if (!matchPasswrord) {
        throw new AppError("Wrong email or password", 401);
    }

    const token: string = jwt.sign({ id: user.id }, JWT_SECRET, {
        expiresIn: "24hr",
        subject: user.id.toString(),
    });

    return token;
};
