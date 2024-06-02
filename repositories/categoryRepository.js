import { Category } from "../models/index.js";

const categoryRepository = {
    create: async (newcategory) => {
        try {
            const category = await Category.create(newcategory);
            return category;
        } catch (error) {
            throw error;
        }
    },
    getAll: async () => {
        try {
            const categories = await Category.findAll({
                order: [["name", "ASC"]],
            });
            return categories;
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            const category = await Category.findByPk(id);
            return category;
        } catch (error) {
            throw error;
        }
    },
    update: async (id, newValues) => {
        try {
            const category = await Category.update(newValues, {
                where: { id: id },
                individualHooks: true,
            });
            return category[1][0];
        } catch (error) {
            throw error;
        }
    },
    delete: async (id) => {
        try {
            const category = await Category.destroy({
                where: { id: id },
                individualHooks: true,
            });
            return category;
        } catch (error) {
            throw error;
        }
    },
};

export default categoryRepository;
