import { DataTypes } from "sequelize";
import db from "../config/db.js";
import { isSpanishAlpha } from "./validations/spanishAlphanumeric.js";

const Category = db.define("Category", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El nombre es requerido",
            },
            notEmpty: {
                msg: "El nombre no puede venir vacío",
            },
            isSpanishAlpha: (value) => isSpanishAlpha(value, "name"),
        },
    },
});

export default Category;
