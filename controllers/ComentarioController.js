import ComentarioService from "../services/ComentarioService.js";


const comentarioController = {
    postComentario: async (req, res, next) => {
        try {
            const nuevoComentario = await ComentarioService.createComentario(req.body);
            res.status(201).json(nuevoComentario);
        } catch (error) {
            next(error);
        }
    },

    getAllComentarios: async (req, res, next) => {
        try {
            const comentarios = await ComentarioService.getAllComentarios();
            res.status(200).json(comentarios);
        } catch (error) {
            next(error);
        }
    },


    putComentarios: async (req, res, next) => {
        try {
            const comentarioActualizado= await ComentarioService.updateComentario(req.params.id, req.body);
            res.status(200).json(comentarioActualizado);
        } catch (error) {
            next(error);
        }
    },

    deleteComentario: async (req, res, next) => {
        try {
            const comentarioEliminado = await ComentarioService.deleteComentario(req.params.id);
            res.status(200).json(comentarioEliminado);
        } catch (error) {
            next(error);
        }
    }
};

export default comentarioController;

