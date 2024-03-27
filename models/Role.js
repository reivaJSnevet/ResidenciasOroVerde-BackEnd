import { DataTypes } from "sequelize";
import db from "../config/db.js";
import { isSpanishAlpha } from "./validations/spanishAlphanumeric.js";

const Role = db.define("Role", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "El nombre es obligatorio",
            },
            notEmpty: {
                msg: "El nombre no puede venir vacío",
            },
            len: {
                args: [3, 50],
                msg: "El nombre debe tener entre 3 y 50 caracteres",
            },
            isSpanishAlpha: (value) => isSpanishAlpha(value, "name"),
        },
    },
});

export default Role;
