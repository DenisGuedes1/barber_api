// import { AppDataSource } from '../../data-source';
// import { UserAppointment } from '../../entities/userAppointments';
// import { Service as BarberService } from '../../entities/barberService';
// import { BarberAvailability } from '../../entities/barberAvailability';

// class AppointmentService {
//   async setAppointment(userId: number, barberId: number, serviceId: number, year: number, month: number, day: number, hour: number) {
//     const array = { error: '' };

//     try {
//       const serviceRepository = AppDataSource.getRepository(BarberService);
//       const appointmentRepository = AppDataSource.getRepository(UserAppointment);
//       const availabilityRepository = AppDataSource.getRepository(BarberAvailability);

//       const barberservice = await serviceRepository.findOne({
//         where: { id: serviceId, barbers: barberId },
//       });

//       if (barberservice) {
//         const apDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hour < 10 ? '0' + hour : hour}:00:00`;

//         if (Date.parse(apDate) > 0) {
//           const apps = await appointmentRepository.count({
//             where: { id_barber: barberId, ap_datetime: apDate },
//           });

//           if (apps === 0) {
//             const weekday = new Date(apDate).getDay();

//             const avail = await availabilityRepository.findOne({
//               where: { id_barber: barberId, weekday: weekday },
//             });

//             if (avail) {
//               const hours = avail.hours.split(',');

//               if (hours.includes(hour + ':00')) {
//                 const newApp = appointmentRepository.create();
//                 newApp.id_user = userId;
//                 newApp.id_barber = barberId;
//                 newApp.id_service = serviceId;
//                 newApp.ap_datetime = apDate;
//                 await appointmentRepository.save(newApp);
//               } else {
//                 array.error = 'Barbeiro não atende neste horário';
//               }
//             } else {
//               array.error = 'Barbeiro não atende neste dia.';
//             }
//           } else {
//             array.error = 'Barbeiro já possui atendimento neste dia e horário.';
//           }
//         } else {
//           array.error = 'Data inválida';
//         }
//       } else {
//         array.error = 'Serviço inexistente';
//       }
//     } catch (error) {
//       array.error = 'Ocorreu um erro ao agendar';
//     }

//     return array;
//   }
// }

// export default AppointmentService;
