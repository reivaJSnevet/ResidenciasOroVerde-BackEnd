import { Usuario } from "../models/index.js";


const usuarioRepository = {

  create: async (usuario) => {
    try {
      const nuevoUsuario = await Usuario.create(usuario);
      return nuevoUsuario;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    try {
      const usuarios = await Usuario.findAll();
        return usuarios;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const usuario = await Usuario.findByPk(id);
      return usuario;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, actualizarUsuario) => {
    try {
      const usuarioActualizado = await Usuario.update(actualizarUsuario, {
        where: {id },
        individualHooks:true,
      });
      return usuarioActualizado[1][0];
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const usuario = await Usuario.destroy({ where: { id } });
      return usuario;
    } catch (error) {
      throw error;
    }
  },
};

export default usuarioRepository;
