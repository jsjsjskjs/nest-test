"use strict";
const Driver_1 = require("./src/entities/Driver");
const Fryer_1 = require("./src/entities/Fryer");
const FryerStuff_1 = require("./src/entities/FryerStuff");
const Menu_1 = require("./src/entities/Menu");
const Nf_1 = require("./src/entities/Nf");
const Order_1 = require("./src/entities/Order");
const Review_1 = require("./src/entities/Review");
const Truck_1 = require("./src/entities/Truck");
const User_1 = require("./src/entities/User");
const Wok_1 = require("./src/entities/Wok");
const WokStuff_1 = require("./src/entities/WokStuff");
const dotenv = require("dotenv");
dotenv.config();
const config = {
    type: 'mysql',
    host: process.env.NODE_ENV === 'production' ? process.env.DATABASE_HOST : process.env.LOCAL_DATABASE_HOST,
    port: process.env.NODE_ENV === 'production' ? +process.env.DATABASE_PORT : +process.env.LOCAL_DATABASE_PORT,
    username: process.env.NODE_ENV === 'production' ? process.env.DATABASE_USER : process.env.LOCAL_DATABASE_USER,
    password: process.env.NODE_ENV === 'production' ? process.env.DATABASE_PASSWORD : process.env.LOCAL_DATABASE_PASSWORD,
    database: process.env.NODE_ENV === 'production' ? process.env.DATABASE_NAME : process.env.LOCAL_DATABASE_NAME,
    entities: [
        Driver_1.Driver,
        Fryer_1.Fryer,
        FryerStuff_1.FryerStuff,
        Menu_1.Menu,
        Nf_1.Nf,
        Order_1.Order,
        Review_1.Review,
        Truck_1.Truck,
        User_1.User,
        Wok_1.Wok,
        WokStuff_1.WokStuff
    ],
    migrations: [__dirname + '/src/migrations/*.ts'],
    cli: { migrationsDir: 'src/migrations' },
    autoLoadEntities: true,
    charset: 'utf8mb4',
    synchronize: false,
    logging: true,
    keepConnectionAlive: true
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map