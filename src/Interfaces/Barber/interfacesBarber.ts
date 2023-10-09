import { z } from "zod";
import {
    returnBarberSchema,
    barberSchema,
    LoginBarberSchema,
} from "../../Schema/Barber/barberSchema";

export type TreturnBarberCreatedInterface = z.infer<typeof returnBarberSchema>;

export type TcreatedBarber = z.infer<typeof barberSchema>;

export type TloginBarber = z.infer<typeof LoginBarberSchema>;

export type TreturnGetBarbers = Omit<TcreatedBarber, "password">;
