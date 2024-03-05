import Router from 'express';
import calificacionController from '../controllers/CalificacionController.js';

const calificacionRoutes = Router();

calificacionRoutes.get('/calificaciones', calificacionController.getAllCalificaciones);
calificacionRoutes.get('/calificaciones/:id', calificacionController.getCalifiacionById);
calificacionRoutes.post('/calificaciones', calificacionController.postCalificacion);
calificacionRoutes.put('/calificaciones/:id', calificacionController.putCalificacion);
calificacionRoutes.delete('/calificaciones/:id', calificacionController.deleteCalificacion);

export default calificacionRoutes;