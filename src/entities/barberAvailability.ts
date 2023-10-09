import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Barbers } from "./barbers";

@Entity("barberAvailability")
export class BarberAvailability {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weekday: number;

    @Column()
    hours: string;

    @ManyToOne(() => Barbers, (barber) => barber.availability)
    barber: Barbers;
}
