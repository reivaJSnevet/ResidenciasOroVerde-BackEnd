import { Router } from 'express';
import commentController from '../controllers/commentController.js';

const commentRouter = Router();

commentRouter.get('/comments', commentController.getAllComments);
commentRouter.post('/comments', commentController.postComment);
commentRouter.get('/comments/:id', commentController.getCommentById);
commentRouter.put('/comments/:id', commentController.putComment);
commentRouter.delete('/comments/:id', commentController.deleteComment);
commentRouter.get('/comments/user/:userId', commentController.getAllByUser);

export default commentRouter;
