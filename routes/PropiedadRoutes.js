import { Router } from 'express';
import propiedadController from '../controllers/PropiedadController.js';

const propiedadRouter = Router();

propiedadRouter.get('/propiedades', propiedadController.getAllPropiedades);
propiedadRouter.get('/propiedades/:id', propiedadController.getPropiedadById);
propiedadRouter.post('/propiedades', propiedadController.postPropiedad);
propiedadRouter.put('/propiedades/:id', propiedadController.putPropiedad);
propiedadRouter.delete('/propiedades/:id', propiedadController.deletePropiedad);
// Propiedad Calificaciones
propiedadRouter.post('/propiedades/:id/calificaciones', propiedadController.postCalificacion);
propiedadRouter.put('/propiedades/:id/calificaciones', propiedadController.putCalificacion);
propiedadRouter.delete('/propiedades/:id/calificaciones', propiedadController.deleteCalificacion);
//Propiedad Categorias


export default propiedadRouter;
