import usuarioService from "../services/UsuarioService.js";

const usuarioController = {
    createUsuario: async (req, res, next) => {
        try {
            const nuevoUsuario = await usuarioService.createUsuario(req.body);
            res.status(201).json(nuevoUsuario);
        } catch (error) {
            next(error);
        }
    },

    getAllUsuarios: async (req, res, next) => {
        try {
            const usuarios = await usuarioService.getAllUsuarios();
            res.status(200).json(usuarios);
        } catch (error) {
            next(error);
        }
    },

    getUsuarioById: async (req, res, next) => {
        try {
            const usuario = await usuarioService.getUsuarioById(req.params.id);
            res.status(200).json(usuario);
        } catch (error) {
            next(error);
        }
    },

    updateUsuario: async (req, res, next) => {
        try {
            const usuarioActualizado = await usuarioService.updateUsuario(req.params.id, req.body);
            res.status(200).json(usuarioActualizado);
        } catch (error) {
            next(error);
        }
    },

    deleteUsuario: async (req, res, next) => {
        try {
            const usuarioEliminado = await usuarioService.deleteUsuario(req.params.id);
            res.status(200).json(usuarioEliminado);
        } catch (error) {
            next(error);
        }
    }
}

export default usuarioController;