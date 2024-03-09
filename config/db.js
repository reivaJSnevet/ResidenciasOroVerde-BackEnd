import { Sequelize } from "sequelize";
import dotevn from "dotenv";

dotevn.config({ path: ".env" });

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        timezone: "-06:00",
        logging: false,
        define: {
            timestamps: false,
            paranoid: false,
            freezeTableName: true,

        },
        pool: {
            acquire: 30000,
            idle: 10000,
            max: 5,
            min: 0,
        }
    }
);

export default db;