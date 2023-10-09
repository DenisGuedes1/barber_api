// import { Request, Response } from "express";
// import AppointmentService from "../../Service/Barber/setAppointmentService";

// class AppointmentController {
//     private appointmentService: AppointmentService;

//     constructor() {
//         this.appointmentService = new AppointmentService();
//     }

//     async setAppointment(req: Request, res: Response) {
//         const { serviceId } = req.body;
//         const userId = req.user.id;
//         const barberId = parseInt(req.params.barberId);

//         try {
//             const result = await this.appointmentService.setAppointment(
//                 userId,
//                 barberId,
//                 serviceId
//             );
//             res.json(result);
//         } catch (error) {
//             console.log(error, "ERRORRRR");
//             res.status(500).json({ error: "Erro ao agendar" });
//         }
//     }
// }

// export default AppointmentController;
import { Request, Response } from "express";
import setAppointment from "../../Service/Barber/setAppointmentService";

const setAppointmentController = async (req: Request, res: Response) => {
    const { serviceId, selectedHour, selectedDate } = req.body;
    const formattedDate = `${selectedDate} ${selectedHour}`;
    console.log(formattedDate, "data formatada");
    const selectedDateBody = new Date(formattedDate);
    console.log(selectedDateBody, "data selecionada");

    console.log(selectedDateBody);

    const userId = req.user.id;
    const barberId = parseInt(req.params.barberId);

    try {
        const result = await setAppointment(
            userId,
            barberId,
            serviceId,
            selectedHour,
            selectedDateBody
        );
        res.json(result);
    } catch (error) {
        console.log("error controlller /*/*/*2565", error);
        res.status(500).json({ error: "Erro ao agendar" });
    }
};

export default setAppointmentController;
