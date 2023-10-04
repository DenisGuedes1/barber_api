import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
    ManyToMany,
    ManyToOne,
} from "typeorm";
import { Barbers } from "./barbers";

@Entity("photos_barber")
export class PhotosBarber {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Barbers, (barber) => barber.photos)
    barber: Barbers;

    @Column()
    url: string;
}
