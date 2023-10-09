import { Router } from "express";

import { validateDataMiddleware } from "../../Middleware/validatedMidlle";
import { checkEmailMiddle } from "../../Middleware/checkEmail";
import { createdUserController } from "../../Controller/User/createdUserController";
import {
    LoginUserSchema,
    createdUserSchema,
} from "../../Schema/User/userSchema";
import {
    LogoutControllerUser,
    loginUserController,
} from "../../Controller/User/loginUserController";
import { veriFyTokenIsValid } from "../../Middleware/checkTokenMiddle";
import { toggleFavoriteController } from "../../Controller/User/toggleFavorites.Controller";
import { getFavorites } from "../../Controller/User/getFavoritesController";
import { GetBarbersController } from "../../Controller/User/getAlBarbersController";
import { getOneBarberController } from "../../Controller/User/getOneBarberController";

const userRouter: Router = Router();

userRouter.post(
    "/user",
    checkEmailMiddle,
    validateDataMiddleware(createdUserSchema),
    createdUserController
);
userRouter.post(
    "/auth/login",
    validateDataMiddleware(LoginUserSchema),
    loginUserController
);
userRouter.post("/auth/logout", LogoutControllerUser);

userRouter.post(
    "/user/favorites",
    veriFyTokenIsValid,
    toggleFavoriteController
);
userRouter.get("/user/favorites", veriFyTokenIsValid, getFavorites);

userRouter.get("/barbers", veriFyTokenIsValid, GetBarbersController);
userRouter.get(
    "/barbers/:id_barber",
    veriFyTokenIsValid,
    getOneBarberController
);
export default userRouter;
