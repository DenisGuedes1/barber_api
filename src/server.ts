import app from "./app";
import { AppDataSource } from "./data-source";
AppDataSource.initialize()
    .then(() => {
        console.log("dataBase connected!");
        app.listen(3000, () => {
            console.log("server is running");
        });
    })
    .catch((err) => {
        console.log(err);
    });
