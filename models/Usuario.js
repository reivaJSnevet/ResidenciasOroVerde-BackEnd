import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Usuario = db.define(
    "Usuario", {
    id: {
        type: DataTypes.UUID, 
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    apellido1: {
        type: DataTypes.STRING,
        allowNull:false

    },
    apellido2: {
        type: DataTypes.STRING,
        allowNull:false

    },
    correo: {
        type: DataTypes.STRING,
        allowNull:false

    },
    clave: {
        type: DataTypes.STRING,
        allowNull:false

    },
    telefonos: {
        type: DataTypes.JSON,
        allowNull:false

    },
    verificarEmail: {
        type: DataTypes.BOOLEAN,
        allowNull:false

    },
    tokenRefrescar: {
        type: DataTypes.STRING,
    },
    tokenRecuperar: {
        type: DataTypes.STRING,
    },
});

export default Usuario;