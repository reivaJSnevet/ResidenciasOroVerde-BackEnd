import { Router } from 'express';
import categoryController from '../controllers/categoryController.js';

const categoryRouter = Router();

categoryRouter.get('/categories', categoryController.getAllCategories);
categoryRouter.get('/categories/:id', categoryController.getCategoryById);
categoryRouter.post('/categories', categoryController.postCategory);
categoryRouter.put('/categories/:id', categoryController.putCategory);
categoryRouter.delete('/categories/:id', categoryController.deleteCategory);

export default categoryRouter;
