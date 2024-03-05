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
                throw new Error("Comentario no encontrado", id);
            }
            return comentarioActualizado;
        } catch (error) {
            throw error;
        }
    },

    deleteComentario: async (id) => {
        try {
            const comentario = await comentarioRepository.getById(id);
            if (!comentario) {
                throw new Error("Comentario no encontado", id);
            }

            const comentarioEliminado = await comentarioRepository.delete(id);
            return comentarioEliminado;
        } catch (error) {
            throw error;
        }
    },
    
    

};

export default comentarioService;