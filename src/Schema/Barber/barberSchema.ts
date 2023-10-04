import { z } from "zod";
import { hashSync } from "bcryptjs";

export const barberSchema = z.object({
    name: z.string().min(1).max(60),
    email: z.string().email().max(250),
    avatar: z.string().nullable(),
    password: z.string().transform((pass) => {
        return hashSync(pass, 10);
    }),
    stars: z.number().min(0).max(5),
    latitude: z.string(),
    longitude: z.string(),
    reset_token: z.string().nullable(),
});

export const returnBarberSchema = barberSchema.extend({
    id: z.number(),
});

export const LoginBarberSchema = z.object({
    email: z.string(),
    password: z.string(),
});

export const createdServiceSchema = z.object({
    serviceName: z.string(),
    price: z.number(),
});
