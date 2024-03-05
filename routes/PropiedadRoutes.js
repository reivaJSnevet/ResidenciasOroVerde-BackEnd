import { Router } from 'express';
import propiedadController from '../controllers/PropiedadController.js';

const propiedadRouter = Router();

propiedadRouter.get('/propiedades', propiedadController.getAllPropiedades);
propiedadRouter.get('/propiedades/:id', propiedadController.getPropiedadById);
propiedadRouter.post('/propiedades', propiedadController.postPropiedad);
propiedadRouter.put('/propiedades/:id', propiedadController.putPropiedad);
propiedadRouter.delete('/propiedades/:id', propiedadController.deletePropiedad);

export default propiedadRouter;
