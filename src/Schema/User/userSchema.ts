import { z } from "zod";
import { hashSync } from "bcryptjs";

export const createdUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    avatar: z.string().nullable().default(null),
    password: z.string().transform((pass) => {
        return hashSync(pass, 10);
    }),
    reset_token: z.string().nullable().default(null),
});

export const returnCreatedUserSchema = createdUserSchema.extend({
    id: z.number(),
});

export const LoginUserSchema = z.object({
    email: z.string(),
    password: z.string(),
});
