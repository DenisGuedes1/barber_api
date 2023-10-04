import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import { User } from "./users";
import { Service } from "./barberService";
import { Barbers } from "./barbers";

@Entity("user_appointment")
export class UserAppointment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;
    @ManyToOne(() => Barbers, (barber) => barber.appointments)
    barber: Barbers;

    @Column({ type: "timestamp" })
    ap_datetime: Date;

    @ManyToOne(() => Service, (service) => service.appointments)
    service: Service;
}
