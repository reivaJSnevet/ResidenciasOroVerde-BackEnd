import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Categoria = db.define("Categoria", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El nombre es requerido"
            },
            isAlpha: {
                msg: "El nombre solo puede contener letras"
            },
            
        }
        
    }
});

export default Categoria;