import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Calificacion = db.define("Calificacion", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    calificacion: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "La calificación es obligatoria",
            },
            isFloat: {
                msg: "La calificación debe ser un número",
            },
            min: {
                args: 0,
                msg: "La calificación mínima es 0",
            },
            max: {
                args: 5,
                msg: "La calificación máxima es 5",
            },
        },
    },
});

export default Calificacion;
