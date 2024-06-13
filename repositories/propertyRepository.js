import { Category, Property, Rating, User, Comment } from "../models/index.js";

const propertyRepository = {
    create: async (newProperty) => {
        try {
            const property = await Property.create(newProperty);
            return property;
        } catch (error) {
            throw error;
        }
    },
    getAll: async (page, size) => {
        try {
            const options = {};

            if (page && size) {
                options.limit = +size;
                options.offset = (+page - 1) * +size;
            }

            const properties = await Property.findAll({
                options,
                include: [
                    {
                        model:User,
                        as: "User",
                    },
                    {
                        model: Category,
                    },
                ],
            });
            return properties;
        } catch (error) {
            throw error;
        }
    },
    getAllPublic: async () => {
        try {
            const properties = await Property.findAll(
                {
                    include: [
                        {
                            model: Category,
                        },
                    ],
                }
            );
            return properties;
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            const property = await Property.findByPk(id,
                {
                    include: [
                        {
                            model: User,
                            as: "User",
                        },
                        {
                            model: Comment,
                            include: [
                                {
                                    model: User,
                                },
                            ],
                        }
                    ],
                }
            );

            property.dataValues.ratingCount = await Rating.count({
                where: { PropertyId: id },
            });
            return property;
        } catch (error) {
            throw error;
        }
    },
    getByPublicId: async (id) => {
        try {
            const property = await Property.findByPk(id);
            return property;
        } catch (error) {
            throw error;
        }
    },
    update: async (id, newValues) => {
        try {
            const property = await Property.update(newValues, {
                where: { id: id },
                individualHooks: true,
            });
            return property[1][0];
        } catch (error) {
            throw error;
        }
    },
    delete: async (id) => {
        try {
            const property = await Property.destroy({
                where: { id: id },
                individualHooks: true,
            });
            return property;
        } catch (error) {
            throw error;
        }
    },
    addRating: async (propertyId, UserId, score) => {
        try {
            const rating = await Rating.create({
                PropertyId: propertyId,
                UserId: UserId,
                score: score,
            });
            return rating;
        } catch (error) {
            throw error;
        }
    },
    updateRating: async (id, score) => {
        try {
            const rating = await Rating.update(
                { score: score },
                {
                    where: { id: id },
                    individualHooks: true,
                }
            );
            return rating[1][0];
        } catch (error) {
            throw error;
        }
    },
    deleteRating: async (id) => {
        try {
            const rating = await Rating.destroy({
                where: { id: id },
                individualHooks: true,
            });
            return rating;
        } catch (error) {
            throw error;
        }
    },

    getCategories: async (propertyId) => {
        try {
            const property = await Property.findByPk(propertyId, {
                include: {
                    model: Category,
                    through: { attributes: [] }
                }
            });      
            return property;
        } catch (error) {
            throw error;
        }
    },

    addCategory: async (propertyId, categoryId) => {
        try {
            const property = await Property.findByPk(propertyId);
            const category = await Category.findByPk(categoryId);
            if (property && category) {
                await property.addCategories(category);
                return {
                    property,
                    category,
                    }
            }
            return false;
        } catch (error) {
            throw error;
        }
    },


};

export default propertyRepository;
