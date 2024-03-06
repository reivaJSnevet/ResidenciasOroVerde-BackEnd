import categoriaRepository from "../repositories/CategoriaRepository.js";

const categoriaService = {
  createCategoria: async (categoria) => {
    try {
      const nuevaCategoria = await categoriaRepository.create(categoria);
      return nuevaCategoria;
    } catch (error) {
      throw error;
    }
  },

  getAllCategorias: async () => {
    try {
      const categorias = await categoriaRepository.getAll();
      return categorias;
    } catch (error) {
      throw error;
    }
  },

  getCategoriaById: async (id) => {
    try {
      const categoria = await categoriaRepository.getById(id);
      if (!categoria) {
        throw new Error("Categoría no encontrada", id);
      }
      return categoria;
    } catch (error) {
      throw error;
    }
  },

  updateCategoria: async (id, categoria) => {
    try {
      const categoriaActualizada = await categoriaRepository.update(id, categoria);
      if (!categoriaActualizada) {
        throw new Error("Categoría no encontrada", id);
      }
      return categoriaActualizada;
    } catch (error) {
      throw error;
    }
  },

  deleteCategoria: async (id) => {
    try {
      const categoria = await categoriaRepository.getById(id);
      if (!categoria) {
        throw new Error("Categoría no encontrada", id);
      }

      const categoriaEliminada = await categoriaRepository.delete(id);
      return categoriaEliminada;
    } catch (error) {
      throw error;
    }
  },
};


export default categoriaService;
