import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Comentario = db.define("Comentario", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El contenido es obligatorio",
            },
            notEmpty: {
                msg: "El contenido es obligatorio",
            },
            len: {
                args: [1, 500],
                msg: "El contenido debe tener entre 1 y 500 caracteres",
            },
        },
    },
    fechaPublicacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
});

export default Comentario;
