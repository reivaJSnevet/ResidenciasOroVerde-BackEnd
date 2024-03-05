import { Router } from 'express';
import comentarioController from '../controllers/ComentarioController.js';

const comentarioRouter = Router();

comentarioRouter.get('/comentarios', comentarioController.getAllComentarios);
comentarioRouter.post('/comentarios', comentarioController.postComentario);
comentarioRouter.put('/comentarios/:id', comentarioController.putComentarios);
comentarioRouter.delete('/comentarios/:id', comentarioController.deleteComentario);

export default comentarioRouter;
