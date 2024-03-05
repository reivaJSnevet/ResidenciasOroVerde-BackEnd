import calificacionService from '../services/CalificacionService.js';

const calificacionController = {
    postCalificacion: async (req, res, next) => {
        try {
            const calificacion = await calificacionService.createCalificacion(req.body);
            res.status(201).json(calificacion);
        } catch (error) {
            next(error);
        }
    },

    getAllCalificaciones: async (req, res, next) => {
        try {
            const calificaciones = await calificacionService.geyAllCalificaciones();
            res.status(200).json(calificaciones);
        } catch (error) {
            next(error);
        }
    },

    getCalifiacionById: async (req, res, next) => {
        try {
            const calificacion = await calificacionService.getCalificacionById(req.params.id);
            res.status(200).json(calificacion);
        } catch (error) {
            next(error);
        }
    },

    putCalificacion: async (req, res, next) => {
        try {
            const calificacion = await calificacionService.updateCalificacion(req.params.id, req.body);
            res.status(200).json(calificacion);
        } catch (error) {
            next(error);
        }
    },

    deleteCalificacion: async (req, res, next) => {
        try {
            const calificacion = await calificacionService.deleteCalificacion(req.params.id);
            res.status(200).json(calificacion);
        } catch (error) {
            next(error);
        }
    },
};

export default calificacionController;