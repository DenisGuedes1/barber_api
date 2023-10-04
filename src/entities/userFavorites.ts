import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity("userFavorite")
export class UserFavorite {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_user: number;

    @Column()
    id_barber: number;
}
