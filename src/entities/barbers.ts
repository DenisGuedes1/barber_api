import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToMany,
} from "typeorm";
import { Service } from "./barberService";
import { UserAppointment } from "./userAppointments";
import { BarberAvailability } from "./barberAvailability";
import { PhotosBarber } from "./barberPhotos";
import { Testimony } from "./barberTestimonials";

@Entity("barbers")
export class Barbers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 60 })
    name: string;

    @Column({ type: "varchar", length: 250 })
    email: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    avatar: string | null;

    @Column({ type: "varchar", length: 250 })
    password: string;

    @Column({ type: "numeric", precision: 5, scale: 2 })
    stars: number;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @Column({
        type: "text",
        nullable: true,
    })
    reset_token: string | null;

    @ManyToMany(() => Service, (service) => service.barbers)
    services: Service[];

    @OneToMany(() => UserAppointment, (appointment) => appointment.barber)
    appointments: UserAppointment[];

    @OneToMany(() => Testimony, (testimony) => testimony.barber)
    testimonies: Testimony[];

    @OneToMany(() => PhotosBarber, (photo) => photo.barber)
    photos: PhotosBarber[];

    @OneToMany(() => BarberAvailability, (availability) => availability.barber)
    availability: BarberAvailability[];
}
