import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Barbers } from "./barbers";

@Entity("testimony")
export class Testimony {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Barbers, (barber) => barber.testimonies)
    barber: Barbers;

    @Column()
    rate: number;

    @Column({ type: "varchar", length: 250 })
    body: string;
}
