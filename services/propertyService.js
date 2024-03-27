import { NotFoundError, ValidationError } from "../errors/index.js";
import propertyRepository from "../repositories/propertyRepository.js";

const propertyService = {
    createProperty: async (newProperty) => {
        try {
            const property = await propertyRepository.create(newProperty);
            return property;
        } catch (error) {
            throw error;
        }
    },
    getAllProperties: async ({ page, size }) => {
        try {
            const properties = await propertyRepository.getAll(page, size);
            return properties;
        } catch (error) {
            throw error;
        }
    },
    getPropertyById: async (id) => {
        try {
            const property = await propertyRepository.getById(id);
            if (!property) {
                throw new NotFoundError("Propiedad", id);
            }
            return property;
        } catch (error) {
            throw error;
        }
    },
    updateProperty: async (id, newValues) => {
        try {
            const property = await propertyRepository.update(id, newValues);
            if (!property) {
                throw new NotFoundError("Propiedad", id);
            }
            return property;
        } catch (error) {
            throw error;
        }
    },

    deleteProperty: async (id) => {
        try {
            const property = await propertyRepository.delete(id);
            if (!property) {
                throw new NotFoundError("Propiedad", id);
            }
            return property;
        } catch (error) {
            throw error;
        }
    },

    addRating: async (propertyId, { UserId, score }) => {
        try {
            const property = await propertyRepository.getById(propertyId);
            if (!property) {
                throw new NotFoundError("Propiedad", propertyId);
            } else if (!property.forRent) {
                throw new ValidationError(
                    "La propiedad no está en alquiler.",
                    "Rating"
                );
            }

            const rating = await propertyRepository.addRating(
                propertyId,
                UserId,
                score
            );
            return rating;
        } catch (error) {
            throw error;
        }
    },
    updateRating: async (ratingId, { score }) => {
        try {
            const rating = await propertyRepository.updateRating(
                ratingId,
                score
            );
            if (!rating) {
                throw new NotFoundError("Calificacion", ratingId);
            }
            return rating;
        } catch (error) {
            throw error;
        }
    },

    deleteRating: async (ratingId) => {
        try {
            const rating = await propertyRepository.deleteRating(ratingId);
            if (!rating) {
                throw new NotFoundError("Calificacion", ratingId);
            }
            return rating;
        } catch (error) {
            throw error;
        }
    },
};

export default propertyService;
