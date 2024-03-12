import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/db.js";
import { ValidationError } from "../errors/index.js";
import { isSpanishAlpha } from "./validations/spanishAlphanumeric.js";

const Usuario = db.define(
    "Usuario",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El nombre es obligatorio",
                },
                notEmpty: {
                    msg: "El nombre es obligatorio",
                },
                len: {
                    args: [3, 50],
                    msg: "El nombre debe tener entre 3 y 50 caracteres",
                },
                isSpanishAlpha: (value) => isSpanishAlpha(value, "nombre"),
            },
        },
        apellido1: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El primer apellido es obligatorio",
                },
                notEmpty: {
                    msg: "El primer apellido es obligatorio",
                },
                len: {
                    args: [3, 50],
                    msg: "El primer apellido debe tener entre 3 y 50 caracteres",
                },
                isSpanishAlpha: (value) => isSpanishAlpha(value, "apellido1"),
            },
        },
        apellido2: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El segundo apellido es obligatorio",
                },
                notEmpty: {
                    msg: "El segundo apellido es obligatorio",
                },
                len: {
                    args: [3, 50],
                    msg: "El segundo apellido debe tener entre 3 y 50 caracteres",
                },
                isSpanishAlpha: (value) => isSpanishAlpha(value, "apellido2"),
            },
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El correo es obligatorio",
                },
                notEmpty: {
                    msg: "El correo es obligatorio",
                },
                isEmail: {
                    msg: "El correo debe ser un correo válido",
                },
            },
        },
        clave: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "La clave es obligatoria",
                },
                notEmpty: {
                    msg: "La clave es obligatoria",
                },
                min: {
                    args: 8,
                    msg: "La clave debe tener al menos 8 caracteres",
                },
                is: {
                    args: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    msg: "La clave debe contener al menos una letra mayúscula, una letra minúscula y un número",
                },
            },
        },
        telefonos: {
            type: DataTypes.JSON,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El teléfono es obligatorio",
                },
                notEmpty: {
                    msg: "El teléfono es obligatorio",
                },
                isJSON: (value) => {
                    try {
                        const string = JSON.stringify(value);
                        JSON.parse(string);
            
                    } catch (error) {
                        throw new ValidationError("El teléfono debe ser un JSON válido", "telefonos");
                    }
                },
            },
        },
        verificarEmail: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        tokenVerificar: {
            type: DataTypes.STRING,
        },
        tokenRefrescar: {
            type: DataTypes.STRING,
        },
        tokenRecuperar: {
            type: DataTypes.STRING,
        },
    },
    {
        hooks: {
            beforeCreate: async (usuario) => await hashPassword(usuario),
            beforeBulkCreate: async (usuarios) =>
                await hashPasswordBulk(usuarios),
            beforeUpdate: async (usuario) => {
                if (usuario.changed("clave")) {
                    await hashPassword(usuario);
                }
            },
        },
        defaultScope: {
            attributes: { exclude: ["clave", "tokenVerificar", "tokenRefrescar", "tokenRecuperar"] },
        },
        scopes: {
            withPassword: {
                attributes: { include: ["clave"]}
            },
        },
    }
);

//Hooks
const hashPassword = async (usuario) => {
    const salt = await bcrypt.genSalt(10);
    usuario.clave = await bcrypt.hash(usuario.clave, salt);
};

const hashPasswordBulk = async (usuarios) => {
    for (const usuario of usuarios) {
        await hashPassword(usuario);
    }
};

/**
 * Validates the provided password against the user's password.
 * @param {string} clave - The password to validate.
 * @returns {Promise<boolean>} - A promise that resolves to true if the password is valid, false otherwise.
 */
Usuario.prototype.validarClave = function (clave) {
    if (!this.clave || !clave) {
        return false;
    }
    return bcrypt.compare(clave, this.clave);
};

export default Usuario;
