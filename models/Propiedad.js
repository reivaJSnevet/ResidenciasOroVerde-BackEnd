import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Propiedad = db.define("Propiedad", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coordenadas: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: false
    },
    dimensiones: {
        type: DataTypes.STRING,
        allowNull: false
    },
    renta: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    numHabitaciones: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precioAlquiler: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    precioVenta: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    numducha: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    garaje: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    restricciones: {
        type: DataTypes.STRING,
        allowNull: true
    },
    calificacion: {
        type: DataTypes.FLOAT,
        allowNull: true
    }

});

export default Propiedad;
