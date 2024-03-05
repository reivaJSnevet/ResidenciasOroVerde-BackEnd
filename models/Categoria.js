import { DataTypes } from "sequelize";
import db from "../config/db.js";
import { isSpanishAlpha } from "./validations/spanishAlphanumeric.js";

const Categoria = db.define("Categoria", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El nombre es requerido",
            },
            notEmpty: {
                msg: "El nombre es requerido",
            },
            isSpanishAlpha: (value) => isSpanishAlpha(value, "nombre"),
        },
    },
});

export default Categoria;
