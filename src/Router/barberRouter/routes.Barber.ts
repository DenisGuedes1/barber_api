import { createdBarberController } from "../../Controller/Barber/createdBarber";

import { Router } from "express";

import { validateDataMiddleware } from "../../Middleware/validatedMidlle";
import { checkEmailBarbers } from "../../Middleware/checkEmail";
import {
    LoginBarberSchema,
    barberSchema,
    createdServiceSchema,
} from "../../Schema/Barber/barberSchema";
import { loginBarberController } from "../../Controller/Barber/loginBarber";
import { createdServiceController } from "../../Controller/Barber/createdServiceController";
import { veriFyTokenIsValid } from "../../Middleware/checkTokenMiddle";
import {
    getAvailableSlotsController,
    setAvailabilityController,
} from "../../Controller/Barber/availabilityController";
import setAppointmentController from "../../Controller/Barber/setAppointmentController";

const barberRouter: Router = Router();

barberRouter.post(
    "/barber",
    checkEmailBarbers,
    validateDataMiddleware(barberSchema),
    createdBarberController
);
barberRouter.post(
    "/auth/login/business",
    validateDataMiddleware(LoginBarberSchema),
    loginBarberController
);

barberRouter.post(
    "/service/add",
    veriFyTokenIsValid,
    validateDataMiddleware(createdServiceSchema),
    createdServiceController
);

barberRouter.post("/service", veriFyTokenIsValid, setAvailabilityController);

barberRouter.get(
    "/service/:barberId",
    veriFyTokenIsValid,
    getAvailableSlotsController
);

barberRouter.post(
    "/barber/:barberId",
    veriFyTokenIsValid,
    setAppointmentController
);
export default barberRouter;
