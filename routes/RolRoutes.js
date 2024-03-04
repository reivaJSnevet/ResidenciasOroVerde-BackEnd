import Router from 'express';
import rolController from '../controllers/RolController.js';

const rolRoutes = Router();

rolRoutes.get('/roles', rolController.getAllRoles);
rolRoutes.get('/roles/:id', rolController.getRolById);
rolRoutes.post('/roles', rolController.postRol);
rolRoutes.put('/roles/:id', rolController.putRol);
rolRoutes.delete('/roles/:id', rolController.deleteRol);


export default rolRoutes;