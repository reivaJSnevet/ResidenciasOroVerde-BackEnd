import usuarioRepository from "../repositories/UsuarioRepositorio.js";
import { NotFoundError} from "../errors/index.js";

const usuarioService = {
    createUsuario: async (usuario) => {
        try {
            const nuevoUusario = await usuarioRepository.create(usuario);
            return nuevoUusario;
        } catch (error) {
            throw error;
        }
    },

    getAllUsuarios: async () => {
        try {
            const usuarios = await usuarioRepository.getAll();
            return usuarios;
        } catch (error) {
            throw error;
        }
    },

    getUsuarioById: async (id) => {
        try {
            const usuario = await usuarioRepository.getById(id);
            if (!usuario) {
                throw new NotFoundError("Usuario", id);
            }
            return usuario;
        } catch (error) {
            throw error;
        }
    },

    updateUsuario: async (id, usuario) => {
        try {
            const usuarioActualizado = await usuarioRepository.update(id, usuario);
            if (!usuarioActualizado) {
                throw new NotFoundError("Usuario", id);
            }
            return usuarioActualizado;
        } catch (error) {
            throw error;
        }
    },

    deleteUsuario: async (id) => {
        try {
            const usuario = await usuarioRepository.getById(id);
            if (!usuario) {
                throw new NotFoundError("Usuario", id);
            }

            const usuarioEliminado = await usuarioRepository.delete(id);
            return usuarioEliminado;
        } catch (error) {
            throw error;
        }
    },
    
    

};

export default usuarioService;