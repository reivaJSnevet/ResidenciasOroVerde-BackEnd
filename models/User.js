import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/db.js";
import { ValidationError } from "../errors/index.js";
import { isSpanishAlpha } from "./validations/spanishAlphanumeric.js";

const User = db.define(
    "User",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El nombre es obligatorio",
                },
                notEmpty: {
                    msg: "El nombre no puede venir vacío",
                },
                len: {
                    args: [3, 50],
                    msg: "El nombre debe tener entre 3 y 50 caracteres",
                },
                isSpanishAlpha: (value) => isSpanishAlpha(value, "name"),
            },
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El primer apellido es obligatorio",
                },
                notEmpty: {
                    msg: "El primer apellido no puede venir vacío",
                },
                len: {
                    args: [3, 50],
                    msg: "El primer apellido debe tener entre 3 y 50 caracteres",
                },
                isSpanishAlpha: (value) => isSpanishAlpha(value, "lastName"),
            },
        },
        lastName2: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El segundo apellido es obligatorio",
                },
                notEmpty: {
                    msg: "El segundo apellido no puede venir vacío",
                },
                len: {
                    args: [3, 50],
                    msg: "El segundo apellido debe tener entre 3 y 50 caracteres",
                },
                isSpanishAlpha: (value) => isSpanishAlpha(value, "lastName2"),
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El correo es obligatorio",
                },
                notEmpty: {
                    msg: "El correo no puede venir vacío",
                },
                isEmail: {
                    msg: "El correo debe ser un correo válido",
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "La clave es obligatoria",
                },
                notEmpty: {
                    msg: "La clave no puede venir vacía",
                },
                min: {
                    args: [8],
                    msg: "La clave debe tener al menos 8 caracteres",
                },
                is: {
                    args: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    msg: "La clave debe contener al menos una letra mayúscula, una letra minúscula y un número",
                },
            },
        },
        phoneNumbers: {
            type: DataTypes.JSON,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "El teléfono es obligatorio",
                },
                notEmpty: {
                    msg: "El teléfono no puede venir vacío",
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
        isEmailVerify: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        verifyToken : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        refreshToken: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        recoverToken: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        hooks: {
            beforeCreate: async (user) => await hashPassword(user),
            beforeBulkCreate: async (users) => await hashPasswordBulk(users),
            beforeUpdate: async (user) => {
                if (user.changed("password")) {
                    await hashPassword(user);
                }
            },
        },
        defaultScope: {
            attributes: { exclude: ["password", "verifyToken", "refreshToken", "recoverToken"] },
        },
        scopes: {
            withPassword: {
                attributes: { include: ["password"] }
            },
        },
    }
);

//Hooks
const hashPassword = async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
};

const hashPasswordBulk = async (users) => {
    for (const user of users) {
        await hashPassword(user);
    }
};

/**
 * Validates the provided password against the user's password.
 * @param {string} password - The password to validate.
 * @returns {Promise<boolean>} - A promise that resolves to true if the password is valid, false otherwise.
 */
User.prototype.validatePassword = function (password) {
    if (!this.password || !password) {
        return false;
    }
    return bcrypt.compare(password, this.password);
};

export default User;
