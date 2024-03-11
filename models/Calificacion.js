import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Propiedad from "./Propiedad.js";


const Calificacion = db.define("Calificacion", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    calificacion: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "La calificación es obligatoria",
            },
            isFloat: {
                msg: "La calificación debe ser un número",
            },
            min: {
                args: [0],
                msg: "La calificación mínima es 0",
            },
            max: {
                args: [5],
                msg: "La calificación máxima es 5",
            },
        },
    },
    },
    {
        hooks:{
            afterCreate: async (calificacion) => await calcularCalificacion(calificacion),
            afterUpdate: async (calificacion) => await calcularCalificacion(calificacion),
            afterDestroy: async (calificacion) => await calcularCalificacion(calificacion),
        }
    }
);

//Hooks 
const calcularCalificacion = async (calificacion) => {
    const propiedad = await Propiedad.findByPk(calificacion.PropiedadId);
    const calificaciones = await Calificacion.findAll({where: {PropiedadId: calificacion.PropiedadId}});
    let suma = 0;
    calificaciones.forEach(calificacion => {
        suma += calificacion.calificacion;
    });
    propiedad.calificacion = suma / calificaciones.length;
    await propiedad.save();
}


export default Calificacion;
