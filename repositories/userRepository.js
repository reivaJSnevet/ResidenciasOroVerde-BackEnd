import { User } from "../models/index.js";

const userRepository = {
    create: async (newUser) => {
        try {
            const user = await User.create(newUser);
            return user;
        } catch (error) {
            throw error;
        }
    },
    getAll: async () => {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            const user = await User.findByPk(id);
            return user;
        } catch (error) {
            throw error;
        }
    },
    update: async (id, newValues) => {
        try {
            const user = await User.update(newValues, {
                where: { id: id },
                individualHooks: true,
            });
            return user[1][0];
        } catch (error) {
            throw error;
        }
    },
    delete: async (id) => {
        try {
            const user = await User.destroy({ where: { id: id } });
            return user;
        } catch (error) {
            throw error;
        }
    },
    addFavoriteProperty: async (userId, propertyId) => {
        try {
            const user = await User.findByPk(userId, { include: "favoriteProperties" });
            await user.addFavoriteProperty(propertyId);
            return user;
        } catch (error) {
            throw error;
        }
    },
    removeFavoriteProperty: async (userId, propertyId) => {
        try {
            const user = await User.findByPk(userId);
            await user.removeFavoriteProperty(propertyId);
            return user;
        } catch (error) {
            throw error;
        }
    },
    addRatingPermission: async (userId, propertyId) => {
        try {
            const user = await User.findByPk(userId);
            await user.addRatingPermission(propertyId);
            return user;
        } catch (error) {
            throw error;
        }
    },
    removeRatingPermission: async (userId, propertyId) => {
        try {
            const user = await User.findByPk(userId);
            await user.removeRatingPermission(propertyId);
            return user;
        } catch (error) {
            throw error;
        }
    },
};

export default userRepository;
