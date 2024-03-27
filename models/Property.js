import { DataTypes } from "sequelize";
import db from "../config/db.js";
import { ValidationError } from "../errors/index.js";
import { isSpanishAlpha } from "./validations/spanishAlphanumeric.js";

const Property = db.define("Property", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El nombre es obligatorio",
            },
            notEmpty: {
                msg: "El nombre no puede venir vacío",
            },
            isSpanishAlpha: (value) => isSpanishAlpha(value, "name"),
        },
    },
    coordinates: {
        type: DataTypes.GEOMETRY("POINT"),
        allowNull: false,
        validate: {
            notNull: {
                msg: "Las coordenadas son obligatorias",
            },
            isPoint(value) {
                if (value.coordinates.length !== 2) {
                    throw new ValidationError(
                        "Las coordenadas deben ser un array de dos elementos [latitud, longitud].",
                        "coordinates"
                    );
                }
                const [latitude, longitude] = value.coordinates;

                if (
                    latitude < -90 ||
                    latitude > 90 ||
                    longitude < -180 ||
                    longitude > 180
                ) {
                    throw new ValidationError(
                        "Las coordenadas deben ser válidas (la latitud debe estar entre -90 y 90 y la longitud entre -180 y 180).",
                        "coordinates"
                    );
                }
            },
        },
    },
    squareMeters: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Indicar los metros cuadrados es obligatorio",
            },
            notEmpty: {
                msg: "Los metros cuadrados no pueden venir vacíos",
            },
        },
    },
    forRent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Es obligatorio indicar si la propiedad es para alquiler",
            },
            isIn: {
                args: ["true", "false"],
                msg: "El tipo de renta debe ser 'true' o 'false'",
            },
        },
    },
    bedroomNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El número de habitaciones es obligatorio",
            },
            isInt: {
                msg: "El número de habitaciones debe ser un número entero",
            },
            min: {
                args: [0],
                msg: "El número de habitaciones no puede ser negativo",
            },
        },
    },
    bathroomNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El número de baños es obligatorio",
            },
            isInt: {
                msg: "El número de baños debe ser un número entero",
            },
            min: {
                args: [0],
                msg: "El número de baños no puede ser negativo",
            },
        },
    },
    garage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El número de garajes es obligatorio",
            },
            isInt: {
                msg: "El número de garajes debe ser un número entero",
            },
            min: {
                args: [0],
                msg: "El número de garajes no puede ser negativo",
            },
        },
    },
    rentalPrice: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            isFloat: {
                msg: "El precio de alquiler debe ser un número decimal",
            },
            min: {
                args: [0],
                msg: "El precio de alquiler no puede ser negativo",
            },
        },
    },
    salePrice: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            isFloat: {
                msg: "El precio de venta debe ser un número decimal",
            },
            min: {
                args: [0],
                msg: "El precio de venta no puede ser negativo",
            },
        },
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: {
                args: [0, 500],
                msg: "La descripción debe tener entre 0 y 500 caracteres",
            },
        },
    },
    restrictions: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: {
                args: [0, 500],
                msg: "Las restricciones deben tener entre 0 y 500 caracteres",
            },
        },
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            isFloat: {
                msg: "La calificación debe ser un número decimal",
            },
            min: {
                args: [0],
                msg: "La calificación no puede ser negativo",
            },
            max: {
                args: [5],
                msg: "La calificación no puede ser mayor a 5",
            },
        },
    },
    photos: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Las fotos son obligatorias",
            },
            notEmpty: {
                msg: "Las fotos no pueden venir vacías",
            },
        },
    },
});

export default Property;