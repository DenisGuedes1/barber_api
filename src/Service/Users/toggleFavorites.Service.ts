import { AppDataSource } from "../../data-source";
import { Barbers } from "../../entities/barbers";
import { UserFavorite } from "../../entities/userFavorites";

export const toggleFavoriteService = async (
    userId: number,
    barberId: number
) => {
    const repository = AppDataSource.getRepository(Barbers);
    const repositoryFav = AppDataSource.getRepository(UserFavorite);
    const barber = await repository.findOne({
        where: {
            id: barberId,
        },
    });

    if (barber) {
        const fav = await repositoryFav.findOne({
            where: {
                id_user: userId,
                id_barber: barberId,
            },
        });
        if (fav) {
            await repositoryFav.remove(fav);
            return { have: false };
        } else {
            const newFavorite = repositoryFav.create({
                id_user: userId,
                id_barber: barberId,
            });
            await repositoryFav.save(newFavorite);
            console.log(newFavorite);
            return { have: true };
        }
    }
};
