import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import userRouter from "./Router/UsersRoute/routerUser";
import barberRouter from "./Router/barberRouter/routes.Barber";
import { handlreErrors } from "./Error/handleErrors";

const app: Application = express();

app.use(express.json());

app.use(
    cors({
        origin: true,
    })
);
app.use("", barberRouter);

app.use("", userRouter);
app.use(handlreErrors);
export default app;
