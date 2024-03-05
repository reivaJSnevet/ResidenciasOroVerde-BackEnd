import { DataTypes } from "sequelize";
import db from "../config/db.js";
import { ValidationError } from "../errors/index.js";
import { isSpanishAlpha } from "./validations/spanishAlphanumeric.js";

const Propiedad = db.define("Propiedad", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El nombre es obligatorio",
            },
            notEmpty: {
                msg: "El nombre es obligatorio",
            },
            isSpanishAlpha: (value) => isSpanishAlpha(value, "nombre"),
        },
    },
    coordenadas: {
        type: DataTypes.GEOMETRY("POINT"),
        allowNull: false,
        validate: {
            notNull: {
                msg: "Las coordenadas son obligatorias",
            },
            isPoint(value) {
                if (value.coordinates.length !== 2) {
                    throw new ValidationError(
                        "Las coordenadas deben ser un array de dos elementos [longitud, latitud].",
                        "coordenadas"
                    );
                }
                const [longitude, latitude] = value.coordinates;

                if (
                    latitude < -90 ||
                    latitude > 90 ||
                    longitude < -180 ||
                    longitude > 180
                ) {
                    throw new ValidationError(
                        "Las coordenadas deben ser válidas (latitud entre -90 y 90, longitud entre -180 y 180).",
                        "coordenadas"
                    );
                }
            },
        },
    },
    dimensiones: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    renta: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El tipo de renta es obligatorio",
            },
            notEmpty: {
                msg: "El tipo de renta es obligatorio",
            },
            isIn: {
                args: ["true", "false"],
                msg: "El tipo de renta debe ser 'true' o 'false'",
            },
        },
    },
    numHabitaciones: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El número de habitaciones es obligatorio",
            },
            isInt: {
                msg: "El número de habitaciones debe ser un número entero",
            },
        },
    },
    precioAlquiler: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            isFloat: {
                msg: "El precio de alquiler debe ser un número decimal",
            },
        },
    },
    precioVenta: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            isFloat: {
                msg: "El precio de venta debe ser un número decimal",
            },
        },
    },
    numducha: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El número de duchas es obligatorio",
            },
            isInt: {
                msg: "El número de duchas debe ser un número entero",
            },
        },
    },
    garaje: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "El número de garajes debe ser un número entero",
            },
        },
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: {
                args: [0, 500],
                msg: "La descripción debe tener entre 0 y 500 caracteres",
            },
        },
    },
    restricciones: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: {
                args: [0, 500],
                msg: "Las restricciones deben tener entre 0 y 500 caracteres",
            },
        },
    },
    calificacion: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
});

export default Propiedad;
