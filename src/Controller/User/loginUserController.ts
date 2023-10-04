import { Request, Response } from "express";
import { loginUserService } from "../../Service/Users/loginUser.Service";
import { AppError } from "../../Error/handleErrors";

export const loginUserController = async (req: Request, resp: Response) => {
    const data = req.body;
    console.log(data, "login");

    const login = await loginUserService(data);
    console.log(login, "login funcao acessada");
    return resp.json(login).status(200);
};

export const LogoutControllerUser = async (req: Request, resp: Response) => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new AppError(
            "você precisa estar logado, para que possa ser deslogado do sistema",
            401
        );
    } else {
        localStorage.removeItem(token);
    }

    return resp.redirect("/login");
};
