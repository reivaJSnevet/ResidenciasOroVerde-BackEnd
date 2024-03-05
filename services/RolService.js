import rolRepository from "../repositories/RolRepository.js";
import { NotFoundError } from "../errors/index.js";

const rolService = {
  createRol: async (rol) => {
    try {
      const newRol = await rolRepository.create(rol);
      return newRol;
    } catch (error) {
      throw error;
    }
  },

  getAllRoles: async () => {
    try {
      const roles = await rolRepository.getAll();
      return roles;
    } catch (error) {
      throw error;
    }
  },

  getRolById: async (id) => {
    try {
      const rol = await rolRepository.getById(id);
      if (!rol) {
        throw new NotFoundError("Rol", id);
      }
      return rol;
    } catch (error) {
      throw error;
    }
  },

  updateRol: async (id, rol) => {
    try {
      const rolUpdated = await rolRepository.update(id, rol);
      if (!rolUpdated) {
        throw new NotFoundError("Rol", id);
      }
      return rolUpdated;
    } catch (error) {
      throw error;
    }
  },

  deleteRol: async (id) => {
    try {
      const rol = await rolRepository.getById(id);
      if (!rol) {
        throw new NotFoundError("Rol", id);
      }

      const rolDeleted = await rolRepository.delete(id);
      return rolDeleted;
    } catch (error) {
      throw error;
    }
  },
};

export default rolService;
