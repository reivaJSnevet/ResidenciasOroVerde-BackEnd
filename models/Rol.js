import { DataTypes } from "sequelize";
import db from "../config/db.js";
import { isSpanishAlpha } from "./validations/spanishAlphanumeric.js";

const Rol = db.define("Rol", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "El nombre es obligatorio",
            },
            notEmpty: {
                msg: "El nombre es obligatorio",
            },
            len: {
                args: [3, 50],
                msg: "El nombre debe tener entre 3 y 50 caracteres",
            },
            isSpanishAlpha: (value) => isSpanishAlpha(value, "nombre"),
        },
    },
});

export default Rol;
