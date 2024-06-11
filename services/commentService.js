import { NotFoundError, ForbiddenError } from "../errors/index.js";
import commentRepository from "../repositories/commentRepository.js";

const commentService = {
    createComment: async (newComment) => {
        try {
            const hasPermission = await commentRepository.validatePermission(newComment.UserId, newComment.PropertyId);
            if (!hasPermission) {
                throw new ForbiddenError("Crear Comentario", ", no tienes permisos para comentar en esta propiedad.", null);
            }
            const comment = await commentRepository.create(newComment);
            return comment;
        } catch (error) {
            throw error;
        }
    },
    getAllComments: async () => {
        try {
            const comments = await commentRepository.getAll();
            return comments;
        } catch (error) {
            throw error;
        }
    },
    getCommentById: async (id) => {
        try {
            const comment = await commentRepository.getById(id);
            if (!comment) {
                throw new NotFoundError("Comentario", id);
            }
            return comment;
        } catch (error) {
            throw error;
        }
    },
    updateComment: async (id, newValues) => {
        try {
            const comment = await commentRepository.update(id, newValues);
            if (!comment) {
                throw new NotFoundError("Comentario", id);
            }
            return comment;
        } catch (error) {
            throw error;
        }
    },
    deleteComment: async (id) => {
        try {
            const comment = await commentRepository.delete(id);
            if (!comment) {
                throw new NotFoundError("Comentario", id);
            }
            return comment;
        } catch (error) {
            throw error;
        }
    },
    getAllByUser: async (userId) => {
        try {
            const comments = await commentRepository.getAllByUser(userId);
            return comments;
        } catch (error) {
            throw error;
        }
    },
};

export default commentService;
