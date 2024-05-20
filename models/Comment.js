import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Comment = db.define("Comment", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El contenido es obligatorio",
            },
            notEmpty: {
                msg: "El contenido no puede venir vacío",
            },
            len: {
                args: [1, 500],
                msg: "El contenido debe tener entre 1 y 500 caracteres",
            },
        },
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,      
    },
});

export default Comment;
