import { Router } from 'express';
import roleController from '../controllers/roleController.js';

const roleRoutes = Router();

roleRoutes.get('/roles', roleController.getAllRoles);
roleRoutes.get('/roles/:id', roleController.getRoleById);
roleRoutes.post('/roles', roleController.postRole);
roleRoutes.put('/roles/:id', roleController.putRole);
roleRoutes.delete('/roles/:id', roleController.deleteRole);


export default roleRoutes;