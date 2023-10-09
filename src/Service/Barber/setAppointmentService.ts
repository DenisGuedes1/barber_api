// import { AppDataSource } from "../../data-source";
// import { UserAppointment } from "../../entities/userAppointments";
// import { Service as BarberService } from "../../entities/barberService";
// import { BarberAvailability } from "../../entities/barberAvailability";
// import { User } from "../../entities/users";
// import { AppError } from "../../Error/handleErrors";

// class AppointmentService {
//     async setAppointment() {
//         const array = { error: "" };
//         console.log("entrou na service");

//         try {
//             const serviceRepository =
//                 AppDataSource.getRepository(BarberService);
//             const appointmentRepository =
//                 AppDataSource.getRepository(UserAppointment);
//             const availabilityRepository =
//                 AppDataSource.getRepository(BarberAvailability);
//             const userRepository = AppDataSource.getRepository(User);

//             const userFind = await userRepository.findOne({
//                 where: {
//                     id: userId,
//                 },
//             });

//             if (!userFind) {
//                 throw new AppError("Ops usuario não encontrado!");
//             }

//             const barberservice = await serviceRepository.findOne({
//                 where: {
//                     id: serviceId,
//                     barbers: barberId,
//                 },
//             });

//             if (barberservice) {
//                 const apps = await appointmentRepository.count({
//                     where: { barber: barberId },
//                 });

//                 if (apps === 0) {
//                     const weekday = new Date().getDay();

//                     const avail = await availabilityRepository.findOne({
//                         where: { barber: barberId, weekday: weekday },
//                     });

//                     if (avail) {
//                         const hours = avail.hours.split(",");

//                         if (hours.includes(new Date().getHours() + ":00")) {
//                             const service = await serviceRepository.findOne({
//                                 where: serviceId,
//                             });

//                             const newApp = appointmentRepository.create();
//                             // if (service) {
//                             //     newApp.service = service;
//                             // }
//                             newApp.user = userFind;
//                             newApp.barber = barberId;
//                             newApp.service = serviceId;
//                             newApp.ap_datetime = new Date();
//                             console.log(newApp, "novo appAgendamento");
//                             await appointmentRepository.save(newApp);
//                         } else {
//                             array.error = "Barbeiro não atende neste horário";
//                         }
//                     } else {
//                         array.error = "Barbeiro não atende neste dia.";
//                     }
//                 } else {
//                     array.error =
//                         "Barbeiro já possui atendimento neste dia e horário.";
//                 }
//             } else {
//                 array.error = "Serviço inexistente";
//             }
//         } catch (error) {
//             array.error = "Ocorreu um erro ao agendar";
//         }

//         return array;
//     }
// }

// export default AppointmentService;
import { AppDataSource } from "../../data-source";
import { UserAppointment } from "../../entities/userAppointments";
import { Service as BarberService } from "../../entities/barberService";
import { BarberAvailability } from "../../entities/barberAvailability";
import { User } from "../../entities/users";
import { AppError } from "../../Error/handleErrors";

const setAppointment = async (
    userId: number,
    barberId: any,
    serviceId: any,
    selectedHour: string,
    selectedDate: Date
) => {
    const array = { error: "" };

    console.log(selectedHour, "hora selecionado");

    try {
        const serviceRepository = AppDataSource.getRepository(BarberService);
        const appointmentRepository =
            AppDataSource.getRepository(UserAppointment);
        const availabilityRepository =
            AppDataSource.getRepository(BarberAvailability);
        const userRepository = AppDataSource.getRepository(User);

        const userFind = await userRepository.findOne({
            where: {
                id: userId,
            },
        });

        if (!userFind) {
            throw new AppError("Ops usuario não encontrado!");
        }

        const barberservice = await serviceRepository.findOne({
            where: {
                id: serviceId,
                barbers: barberId,
            },
        });

        if (barberservice) {
            const apps = await appointmentRepository.count({
                where: { barber: barberId },
            });

            if (apps === 0) {
                const weekday = new Date().getDay();

                const avail = await availabilityRepository.findOne({
                    where: { barber: barberId, weekday: weekday },
                });
                console.log(selectedDate, "selected date user/*/*/*/**/");
                if (selectedDate.getFullYear() !== new Date().getFullYear()) {
                    throw new AppError("O ano do agendamento é inválido.");
                }

                if (
                    selectedDate.getDate() === new Date().getDate() &&
                    selectedDate.getHours() <= new Date().getHours()
                ) {
                    throw new AppError("A hora do agendamento é inválida.");
                }
                if (selectedDate.getDate() < new Date().getDate()) {
                    throw new AppError(
                        "A hora do agendamento é inválida (corresponde ao dia anterior)."
                    );
                }
                console.log(avail, "avail console");
                if (avail) {
                    const hours = avail.hours.split(",");

                    if (hours.includes(selectedHour)) {
                        console.log(selectedHour, "hora selecionado");
                        const service = await serviceRepository.findOne({
                            where: serviceId,
                        });
                        console.log(service, "service selected");
                        if (hours.includes(selectedHour)) {
                            const service = await serviceRepository.findOne({
                                where: serviceId,
                            });
                        }
                        const newApp = appointmentRepository.create();
                        if (service) {
                            newApp.service = service;
                        }
                        newApp.user = userFind;
                        newApp.barber = barberId;

                        // newApp.service = service;
                        newApp.ap_datetime = new Date();

                        await appointmentRepository.save(newApp);
                    } else {
                        array.error = "Barbeiro não atende neste horário";
                        console.log(array);
                    }
                } else {
                    array.error = "Barbeiro não atende neste dia.";
                }
            } else {
                array.error =
                    "Barbeiro já possui atendimento neste dia e horário.";
            }
        } else {
            array.error = "Serviço inexistente";
        }
    } catch (error) {
        console.log(error, "error");
        array.error = "Ocorreu um erro ao agendar";
    }

    return array;
};

export default setAppointment;
