// import { Request, Response } from 'express';
// import AppointmentService from './AppointmentService';

// class AppointmentController {
//   private appointmentService: AppointmentService;

//   constructor() {
//     this.appointmentService = new AppointmentService();
//   }

//   async setAppointment(req: Request, res: Response) {
//     const { userId, barberId, serviceId, year, month, day, hour } = req.body; // Certifique-se de passar esses dados na requisição

//     try {
//       const result = await this.appointmentService.setAppointment(
//         userId,
//         barberId,
//         serviceId,
//         year,
//         month,
//         day,
//         hour
//       );
//       res.json(result);
//     } catch (error) {
//       res.status(500).json({ error: 'Erro ao agendar' });
//     }
//   }
// }

// export default AppointmentController;
