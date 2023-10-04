import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users";
import {
    TcreatedUser,
    TreturnUsersCreatedInterface,
} from "../../Interfaces/User/interfacesUser";

import { returnCreatedUserSchema } from "../../Schema/User/userSchema";

export const createdUserService = async (userData: TcreatedUser) => {
    const newUser: User = AppDataSource.getRepository(User).create(userData);

    await AppDataSource.getRepository(User).save(newUser);

    const verifyFields = returnCreatedUserSchema.parse(newUser);

    return verifyFields;
};
