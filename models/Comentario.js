import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Comentario = db.define("Comentario", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fechaPublicacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});

export default Comentario;