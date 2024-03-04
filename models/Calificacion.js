import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Calificacion = db.define("Calificacion", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    calificacion: {
        type: DataTypes.FLOAT,
        allowNull: true
     
        }       
});

export default Calificacion;