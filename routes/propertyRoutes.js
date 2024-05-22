import { Router } from 'express';
import propertyController from '../controllers/propertyController.js';

const propertyRouter = Router();

propertyRouter.get('/properties', propertyController.getAllProperties);
propertyRouter.get('/properties/:id', propertyController.getPropertyById);
propertyRouter.post('/properties', propertyController.postProperty);
propertyRouter.put('/properties/:id', propertyController.putProperty);
propertyRouter.delete('/properties/:id', propertyController.deleteProperty);
// Property Ratings
propertyRouter.post('/properties/:id/ratings', propertyController.postRating);
propertyRouter.put('/properties/:id/ratings', propertyController.putRating);
propertyRouter.delete('/properties/:id/ratings', propertyController.deleteRating);
//Property Categories
propertyRouter.get('/properties/:id/categories', propertyController.getCategories);
propertyRouter.post('/properties/:id/categories', propertyController.postCategory);



export default propertyRouter;
