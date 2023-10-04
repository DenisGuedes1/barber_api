import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserAppointment } from "./userAppointments";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 45 })
    name: string;

    @Column({ type: "varchar", length: 250 })
    email: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    avatar: string | null;

    @Column({
        type: "text",
        nullable: true,
    })
    reset_token: string | null;

    @Column({ type: "varchar", length: 250 })
    password: string;

    @OneToMany(() => UserAppointment, (appointment) => appointment.user)
    appointments: UserAppointment[];
}
