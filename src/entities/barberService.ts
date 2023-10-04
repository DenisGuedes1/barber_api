import {
    Column,
    PrimaryGeneratedColumn,
    Entity,
    ManyToMany,
    JoinTable,
    OneToMany,
} from "typeorm";
import { Barbers } from "./barbers";
import { UserAppointment } from "./userAppointments";
@Entity("service")
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Barbers, (barbers) => barbers.services)
    @JoinTable()
    barbers: Barbers[];

    @Column({ type: "varchar", length: 50 })
    name: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    price: number;

    @OneToMany(() => UserAppointment, (appointment) => appointment.service)
    appointments: UserAppointment[];
}
