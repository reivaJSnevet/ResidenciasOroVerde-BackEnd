import { NotFoundError } from "../errors/index.js";
import userRepository from "../repositories/userRepository.js";

const userService = {
    createUser: async (newUser) => {
        try {
            const user = await userRepository.create(newUser);
            delete user.dataValues.password;

            return user;
        } catch (error) {
            throw error;
        }
    },
    getAllUsers: async () => {
        try {
            const users = await userRepository.getAll();
            return users;
        } catch (error) {
            throw error;
        }
    },
    getUserById: async (id) => {
        try {
            const user = await userRepository.getById(id);
            if (!user) {
                throw new NotFoundError("Usuario", id);
            }
            return user;
        } catch (error) {
            throw error;
        }
    },
    updateUser: async (id, newValues) => {
        try {
            const user = await userRepository.update(id, newValues);
            if (!user) {
                throw new NotFoundError("Usuario", id);
            }
            return user;
        } catch (error) {
            throw error;
        }
    },
    deleteUser: async (id) => {
        try {
            const user = await userRepository.delete(id);
            if (!user) {
                throw new NotFoundError("Usuario", id);
            }

            return user;
        } catch (error) {
            throw error;
        }
    },
};

export default userService;
