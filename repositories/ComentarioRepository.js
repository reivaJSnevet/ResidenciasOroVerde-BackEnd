import { Comentario} from "../models/index.js";

const comentarioRepository = {

  create: async (comentario) => {
    try {
      const nuevoComentario = await Comentario.create(comentario);
      return nuevoComentario;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    try {
        const comentarios = await Comentario.findAll();
        return comentarios;
    } catch (error) {
        throw error;
    }
},

  update: async (id, actualizarComentario) => {
    try {
      const comentarioActualizado = await Comentario.update(actualizarComentario, {
        where: { id },
        individualHooks: true,
      });
      return comentarioActualizado[1][0];
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const comentario = await Comentario.destroy({ 
        where: { id }, 
      individualHooks: true,
    });
      return comentario;
    } catch (error) {
      throw error;
    }
  },
};



export default comentarioRepository;
