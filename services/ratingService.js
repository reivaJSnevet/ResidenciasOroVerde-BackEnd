import { NotFoundError, ValidationError, ForbiddenError } from "../errors/index.js";
import ratingRepository from "../repositories/ratingRepository.js";

const ratingService = {
    createRating: async (newRating) => {
        try {
            //person only can rate once per property
            const hasRating = await ratingRepository.hasRating(newRating.UserId, newRating.PropertyId);
            const hasPermission = await ratingRepository.hasPermision(newRating.UserId, newRating.PropertyId);

            if (hasRating) {
                throw new ValidationError("Ya has calificado esta propiedad", `Usuario: ${newRating.UserId}, Propiedad: ${newRating.PropertyId}`);
            }

            if (!hasPermission) {
                throw new ForbiddenError("Calificar Propiedad", ",no tienes permisos para calificar esta propiedad", null);
            }

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

            const hasPermission = await ratingRepository.hasPermision(newValues.UserId, newValues.PropertyId);

            if (!hasPermission) {
                throw new ForbiddenError("Calificar Propiedad", ",no tienes permisos para calificar esta propiedad", null);
            }

            delete newValues.UserId;
            delete newValues.PropertyId;

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
};

export default ratingService;
