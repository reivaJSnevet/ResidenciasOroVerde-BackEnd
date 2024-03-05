import { Rol } from "../models/index.js";

const rolRepository = {
    create: async (rol) => {
        try {
            const nuevoRol = await Rol.create(rol);
            return nuevoRol;
        } catch (error) {
            throw error;
        }
    },

    getAll: async () => {
        try {
            const roles = await Rol.findAll();
            return roles;
        } catch (error) {
            throw error;
        }
    },

    getById: async (id) => {
        try {
            const rol = await Rol.findByPk(id);
            return rol;
        } catch (error) {
            throw error;
        }
    },

    update: async (id, actualizarRol) => {
        try {
            const rolActualizado = await Rol.update(actualizarRol, {
                where: { id },
                individualHooks: true,
            });
            return rolActualizado[1][0];
        } catch (error) {
            throw error;
        }
    },

    delete: async (id) => {
        try {
            const rol = await Rol.destroy({
                where: { id },
                individualHooks: true,
            });
            return rol;
        } catch (error) {
            throw error;
        }
    },
};

export default rolRepository;
