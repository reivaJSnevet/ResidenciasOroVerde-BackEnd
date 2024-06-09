import commentService from "../services/commentService.js";

const commentController = {
    postComment: async (req, res, next) => {
        try {
            const comment = await commentService.createComment(req.body);
            res.status(201).json(comment);
        } catch (error) {
            next(error);
        }
    },
    getAllComments: async (req, res, next) => {
        try {
            const comments = await commentService.getAllComments();
            res.status(200).json(comments);
        } catch (error) {
            next(error);
        }
    },
    getCommentById: async (req, res, next) => {
        try {
            const comment = await commentService.getCommentById(req.params.id);
            res.status(200).json(comment);
        } catch (error) {
            next(error);
        }
    },
    putComment: async (req, res, next) => {
        try {
            const comment= await commentService.updateComment(req.params.id, req.body);
            res.status(200).json(comment);
        } catch (error) {
            next(error);
        }
    },
    deleteComment: async (req, res, next) => {
        try {
            const comment = await commentService.deleteComment(req.params.id);
            res.status(200).json(comment);
        } catch (error) {
            next(error);
        }
    },
    getAllByUser: async (req, res, next) => {
        try {
            const comments = await commentService.getAllByUser(req.params.userId);
            res.status(200).json(comments);
        } catch (error) {
            next(error);
        }
    },
};

export default commentController;

