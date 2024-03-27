import { NotFoundError } from "../errors/index.js";
import roleRepository from "../repositories/roleRepository.js";

const roleService = {
    createRole: async (newRole) => {
        try {
            const role = await roleRepository.create(newRole);
            return role;
        } catch (error) {
            throw error;
        }
    },

    getAllRoles: async () => {
        try {
            const roles = await roleRepository.getAll();
            return roles;
        } catch (error) {
            throw error;
        }
    },

    getRoleById: async (id) => {
        try {
            const role = await roleRepository.getById(id);
            if (!role) {
                throw new NotFoundError("Rol", id);
            }
            return role;
        } catch (error) {
            throw error;
        }
    },

    updateRole: async (id, newValues) => {
        try {
            const role = await roleRepository.update(id, newValues);
            if (!role) {
                throw new NotFoundError("Rol", id);
            }
            return role;
        } catch (error) {
            throw error;
        }
    },

    deleteRole: async (id) => {
        try {
            const role = await roleRepository.delete(id);
            if (!role) {
                throw new NotFoundError("Rol", id);
            }
            return role;
        } catch (error) {
            throw error;
        }
    },
};

export default roleService;
