import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Property from "./Property.js";

const Rating = db.define(
    "Rating",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
        },
        score: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "La calificación es obligatoria",
                },
                isFloat: {
                    msg: "La calificación debe ser un número flotante",
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
        hooks: {
            afterCreate: async (rating) => await calculateRating(rating),
            afterUpdate: async (rating) => await calculateRating(rating),
            afterDestroy: async (rating) => await calculateRating(rating),
        },
    }
);

//Hooks
const calculateRating = async (rating) => {
    const property = await Property.findByPk(rating.PropertyId);
    const ratings = await Rating.findAll({
        where: { PropertyId: rating.PropertyId },
    });
    let sum = 0;
    ratings.forEach((rating) => {
        sum += rating.score;
    });
    property.rating = sum / ratings.length;
    await property.save();
};

export default Rating;
