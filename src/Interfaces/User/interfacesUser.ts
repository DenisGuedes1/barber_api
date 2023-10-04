import { z } from "zod";
import {
    LoginUserSchema,
    createdUserSchema,
    returnCreatedUserSchema,
} from "../../Schema/User/userSchema";

export type TreturnUsersCreatedInterface = z.infer<
    typeof returnCreatedUserSchema
>;

export type TcreatedUser = z.infer<typeof createdUserSchema>;

export type TloginUser = z.infer<typeof LoginUserSchema>;
