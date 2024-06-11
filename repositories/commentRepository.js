import { Comment, User } from "../models/index.js";

const commentRepository = {
    create: async (newComment) => {
        try {
            const comment = await Comment.create(newComment);
            return comment;
        } catch (error) {
            throw error;
        }
    },
    getAll: async () => {
        try {
            const comments = await Comment.findAll();
            return comments;
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            const comment = await Comment.findByPk(id);
            return comment;
        } catch (error) {
            throw error;
        }
    },
    update: async (id, newValues) => {
        try {
            const comment = await Comment.update(newValues, {
                where: { id: id },
                individualHooks: true,
            });
            return comment[1][0];
        } catch (error) {
            throw error;
        }
    },
    delete: async (id) => {
        try {
            const comment = await Comment.destroy({
                where: { id: id },
                individualHooks: true,
            });
            return comment;
        } catch (error) {
            throw error;
        }
    },
    getAllByUser: async (userId) => {
        try {
            const comments = await Comment.findAll({
                where: { UserId: userId },
            });
            return comments;
        } catch (error) {
            throw error;
        }
    },
    validatePermission: async (userId, propertyId) => {
        try {
            const user = await User.findByPk(userId);
            const hasPermission = await user.hasRatingPermission(propertyId);
            return hasPermission;
        } catch (error) {
            throw error;
        }
    }
};

export default commentRepository;
