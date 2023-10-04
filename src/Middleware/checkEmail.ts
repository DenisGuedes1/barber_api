import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users";
import { Barbers } from "../entities/barbers";
import { AppError } from "../Error/handleErrors";

export const checkEmailMiddle = async (
    req: Request,
    resp: Response,
    next: NextFunction
) => {
    if (!req.body.email) {
        return next();
    }
    const { email } = req.body;

    const userRepository = AppDataSource.getRepository(User);

    const duplicatedEmail = await userRepository.findOne({ where: { email } });
    if (duplicatedEmail) {
        throw new AppError("Email already exists", 409);
    }
    return next();
};

export const checkEmailBarbers = async (
    req: Request,
    resp: Response,
    next: NextFunction
) => {
    if (!req.body.email) {
        return next();
    }
    const { email } = req.body;

    const userRepository = AppDataSource.getRepository(Barbers);

    const duplicatedEmail = await userRepository.findOne({ where: { email } });
    if (duplicatedEmail) {
        throw new AppError("Email already exists", 409);
    }
    return next();
};
