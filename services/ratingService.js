import { NotFoundError, ValidationError } from "../errors/index.js";
import ratingRepository from "../repositories/ratingRepository.js";

const ratingService = {
    createRating: async (newRating) => {
        try {
            //person only can rate once per property
            await ratingRepository.validateRating(newRating.UserId, newRating.PropertyId);
            const rating = await ratingRepository.create(newRating);
            return rating;
        } catch (error) {
            throw error;
        }
    },
    getAllRatings: async () => {
        try {
            const ratings = await ratingRepository.getAll();
            return ratings;
        } catch (error) {
            throw error;
        }
    },
    getRatingById: async (id) => {
        try {
            const rating = await ratingRepository.getById(id);
            if (!rating) {
                throw new NotFoundError("Calificacion", id);
            }
            return rating;
        } catch (error) {
            throw error;
        }
    },
    updateRating: async (id, newValues) => {
        try {
            const rating = await ratingRepository.update(id, newValues);
            if (!rating) {
                throw new NotFoundError("Calificacion", id);
            }
            return rating;
        } catch (error) {
            throw error;
        }
    },
    deleteRating: async (id) => {
        try {
            const rating = await ratingRepository.delete(id);
            if (!rating) {
                throw new NotFoundError("Calificacion", id);
            }

            return rating;
        } catch (error) {
            throw error;
        }
    },
    validateRating: async (userId, propertyId) => {
        try {
            const rating = await ratingRepository.validateRating(userId, propertyId);

            if (rating) {
                throw new ValidationError("Ya has calificado esta propiedad", `Usuario: ${userId}, Propiedad: ${propertyId}`);
            }

            return rating;
        } catch (error) {
            throw error;
        }
    },
};

export default ratingService;
