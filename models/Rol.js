import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Rol = db.define(
    "Rol", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "El nombre es obligatorio",
            },
            is: {
                args: /^[a-zA-Z0-9_ áéíóúÁÉÍÓÚüÜñÑ]+$/i,
                msg: "El nombre solo puede contener letras y números",
            },
         }
    }
});

export default Rol;