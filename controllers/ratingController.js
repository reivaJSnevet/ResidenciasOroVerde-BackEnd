import ratingService from "../services/ratingService.js";

const ratingController = {
    postRating: async (req, res, next) => {
        try {
            const rating = await ratingService.createRating(req.body);
            res.status(201).json(rating);
        } catch (error) {
            next(error);
        }
    },
    getAllRatings: async (req, res, next) => {
        try {
            const ratings = await ratingService.getAllRatings();
            res.status(200).json(ratings);
        } catch (error) {
            next(error);
        }
    },
    getRatingById: async (req, res, next) => {
        try {
            const rating = await ratingService.getRatingById(req.params.id);
            res.status(200).json(rating);
        } catch (error) {
            next(error);
        }
    },
    putRating: async (req, res, next) => {
        try {
            const rating = await ratingService.updateRating(req.params.id, req.body);
            res.status(200).json(rating);
        } catch (error) {
            next(error);
        }
    },
    deleteRating: async (req, res, next) => {
        try {
            const rating = await ratingService.deleteRating(req.params.id);
            res.status(200).json(rating);
        } catch (error) {
            next(error);
        }
    },
};

export default ratingController;