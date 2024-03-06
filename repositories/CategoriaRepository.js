import { Categoria } from '../models/index.js';

const categoriaRepository = {

    create: async (categoria) => {
        try {
            const nuevaCategoria = await Categoria.create(categoria);
            return nuevaCategoria;
        } catch (error) {
            throw error;
        }
    },

    getAll: async () => {
        try {
            const categorias = await Categoria.findAll();
            return categorias;
        } catch (error) {
            throw error;
        }
    },

    getById: async (id) => {
        try {
            const categoria = await Categoria.findByPk(id);
            return categoria;
        } catch (error) {
            throw error;
        }
    },

    update: async (id, actualizarCategoria) => {
        try {
            const categoriaActualizada = await Categoria.update(actualizarCategoria, {
                where: { id },
                individualHooks: true,
            });
            return categoriaActualizada[1][0];
        } catch (error) {
            throw error;
        }
    },


    delete: async (id) => {
        try {
            const categoria = await Categoria.destroy({
                 where: { id }, 
                 individualHooks: true,
                });
            return categoria;
        } catch (error) {
            throw error;
        }
    }
};

export default categoriaRepository;
