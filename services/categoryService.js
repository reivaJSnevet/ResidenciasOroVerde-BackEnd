import NotFoundError from "../errors/notFoundError.js";
import categoryRepository from "../repositories/categoryRepository.js";

const categoryService = {
    createCategory: async (newCategory) => {
        try {
            const category = await categoryRepository.create(newCategory);
            return category;
        } catch (error) {
            throw error;
        }
    },
    getAllCategories: async () => {
        try {
            const categories = await categoryRepository.getAll();
            return categories;
        } catch (error) {
            throw error;
        }
    },
    getCategoryById: async (id) => {
        try {
            const category = await categoryRepository.getById(id);
            if (!category) {
                throw new NotFoundError("Categoría", id);
            }

            return category;
        } catch (error) {
            throw error;
        }
    },
    updateCategory: async (id, newValues) => {
        try {
            const category = await categoryRepository.update(id, newValues);
            if (!category) {
                throw new NotFoundError("Categoría", id);
            }

            return category;
        } catch (error) {
            throw error;
        }
    },
    deleteCategory: async (id) => {
        try {
            const category = await categoryRepository.delete(id);
            if (!category) {
                throw new NotFoundError("Categoría", id);
            }

            return category;
        } catch (error) {
            throw error;
        }
    },
};

export default categoryService;
