import CategoriaService from "../services/CategoriaService.js";


const categoriaController = {
    postCategoria: async (req, res, next) => {
        try {
            const nuevaCategoria = await CategoriaService.createCategoria(req.body);
            res.status(201).json(nuevaCategoria);
        } catch (error) {
            next(error);
        }
    },

    getAllCategorias: async (req, res, next) => {
        try {
            const categorias = await CategoriaService.getAllCategorias();
            res.status(200).json(categorias);
        } catch (error) {
            next(error);
        }
    },

    getCategoriaById: async (req, res, next) => {
        try {
            const categoria = await CategoriaService.getCategoriaById(req.params.id);
            res.status(200).json(categoria);
        } catch (error) {
            next(error);
        }
    },

    putCategoria: async (req, res, next) => {
        try {
            const categoriaActualizada = await CategoriaService.updateCategoria(req.params.id, req.body);
            res.status(200).json(categoriaActualizada);
        } catch (error) {
            next(error);
        }
    },

    deleteCategoria: async (req, res, next) => {
        try {
            const categoriaEliminada = await CategoriaService.deleteCategoria(req.params.id);
            res.status(200).json(categoriaEliminada);
        } catch (error) {
            next(error);
        }
    }
};

export default categoriaController;

