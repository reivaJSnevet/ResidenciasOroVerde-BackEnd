import { Router } from 'express';
import categoriaController from '../controllers/CategoriaController.js';

const categoriaRouter = Router();

categoriaRouter.get('/categorias', categoriaController.getAllCategorias);
categoriaRouter.get('/categorias/:id', categoriaController.getCategoriaById);
categoriaRouter.post('/categorias', categoriaController.postCategoria);
categoriaRouter.put('/categorias/:id', categoriaController.putCategoria);
categoriaRouter.delete('/categorias/:id', categoriaController.deleteCategoria);

export default categoriaRouter;
