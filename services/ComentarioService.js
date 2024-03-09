import { NotFoundError } from "../errors/index.js";
import comentarioRepository from "../repositories/ComentarioRepository.js";

const comentarioService = {
    createComentario: async (comentario) => {
        try {
            const nuevoComentario = await comentarioRepository.create(comentario);
            return nuevoComentario;
        } catch (error) {
            throw error;
        }
    },

    getAllComentarios: async () => {
        try {
            const comentarios = await comentarioRepository.getAll();
            return comentarios;
        } catch (error) {
            throw error;
        }
    },


    updateComentario: async (id, comentario) => {
        try {
            const comentarioActualizado = await comentarioRepository.update(id, comentario);
            if (!comentarioActualizado) {
                throw new NotFoundError("Comentario", id);
            }
            return comentarioActualizado;
        } catch (error) {
            throw error;
        }
    },

    deleteComentario: async (id) => {
        try {
            const comentario = await comentarioRepository.delete(id);
            if (!comentario) {
                throw new NotFoundError("Comentario", id);
            }

            const comentarioEliminado = await comentarioRepository.delete(id);
            return comentarioEliminado;
        } catch (error) {
            throw error;
        }
    },
    
    

};

export default comentarioService;