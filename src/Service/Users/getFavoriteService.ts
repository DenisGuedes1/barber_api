import { AppDataSource } from "../../data-source";
import { UserFavorite } from "../../entities/userFavorites";
import { User } from "../../entities/users";
import { Barbers } from "../../entities/barbers";

export class FavoriteService {
    async getFavorites(loggedUserId: number) {
        const userRepository = AppDataSource.getRepository(User);
        const userFavoriteRepository =
            AppDataSource.getRepository(UserFavorite);
        const barberRepository = AppDataSource.getRepository(Barbers);

        try {
            const user = await userRepository.findOne({
                where: {
                    id: loggedUserId,
                },
            });

            if (!user) {
                throw new Error("Usuário não encontrado");
            }

            const favorites = await userFavoriteRepository.find({
                where: {
                    id_user: user.id,
                },
            });

            const list = await Promise.all(
                favorites.map(async (favorite) => {
                    const barber = await barberRepository.findOne({
                        where: { id: favorite.id_barber },
                    });
                    if (barber) {
                        barber.avatar = `media/avatars/${barber.avatar}`;
                    }
                    return barber;
                })
            );

            return {
                error: "",
                list: list.filter((barber) => barber !== undefined),
            };
        } catch (error: any) {
            return { error: error.message, list: [] };
        }
    }
}
