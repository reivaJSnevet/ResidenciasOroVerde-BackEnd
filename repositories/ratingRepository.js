import { Rating } from "../models/index.js";

const ratingRepository = {
    create: async (newRating) => {
        try {
            const rating = await Rating.create(newRating);
            return rating;
        } catch (error) {
            throw error;
        }
    },
    getAll: async () => {
        try {
            const ratings = await Rating.findAll();
            return ratings;
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            const rating = await Rating.findByPk(id);
            return rating;
        } catch (error) {
            throw error;
        }
    },
    update: async (id, newValues) => {
        try {
            const rating = await Rating.update(newValues, {
                where: {
                    id: id,
                },
                individualHooks: true,
            });
            return rating[1][0];
        } catch (error) {
            throw error;
        }
    },
    delete: async (id) => {
        try {
            const rating = Rating.destroy({
                where: { id: id },
                individualHooks: true,
            });
            return rating;
        } catch (error) {
            throw error;
        }
    },
};

export default ratingRepository;
