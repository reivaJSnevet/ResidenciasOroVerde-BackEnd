import categoryService from "../services/categoryService.js";

const categoryController = {
    postCategory: async (req, res, next) => {
        try {
            const category = await categoryService.createCategory(req.body);
            res.status(201).json(category);
        } catch (error) {
            next(error);
        }
    },

    getAllCategories: async (req, res, next) => {
        try {
            const categories = await categoryService.getAllCategories();
            res.status(200).json(categories);
        } catch (error) {
            next(error);
        }
    },

    getCategoryById: async (req, res, next) => {
        try {
            const category = await categoryService.getCategoryById(req.params.id);
            res.status(200).json(category);
        } catch (error) {
            next(error);
        }
    },

    putCategory: async (req, res, next) => {
        try {
            const category = await categoryService.updateCategory(req.params.id, req.body);
            res.status(200).json(category);
        } catch (error) {
            next(error);
        }
    },

    deleteCategory: async (req, res, next) => {
        try {
            const category = await categoryService.deleteCategory(req.params.id);
            res.status(200).json(category);
        } catch (error) {
            next(error);
        }
    }
};

export default categoryController;

