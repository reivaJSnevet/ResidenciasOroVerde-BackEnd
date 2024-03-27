import { Role } from "../models/index.js";

const roleRepository = {
    create: async (newRole) => {
        try {
            const role = await Role.create(newRole);
            return role;
        } catch (error) {
            throw error;
        }
    },
    getAll: async () => {
        try {
            const roles = await Role.findAll();
            return roles;
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            const role = await Role.findByPk(id);
            return role;
        } catch (error) {
            throw error;
        }
    },
    update: async (id, newValues) => {
        try {
            const role = await Role.update(newValues, {
                where: { id: id },
                individualHooks: true,
            });
            return role[1][0];
        } catch (error) {
            throw error;
        }
    },
    delete: async (id) => {
        try {
            const role = await Role.destroy({
                where: { id: id },
                individualHooks: true,
            });
            return role;
        } catch (error) {
            throw error;
        }
    },
};

export default roleRepository;
