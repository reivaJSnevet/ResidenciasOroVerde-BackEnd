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

    // getAllCalificaciones: async
};