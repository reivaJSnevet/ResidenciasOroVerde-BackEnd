import { User, Role } from "../models/index.js";

const authRepository = {
    getByEmail: async (email) => {
        try {
            const user = await User.scope("withPassword").findOne({
                where: {
                    email: email,
                },
                include: [Role],
            });
            return user;
        } catch (error) {
            throw error;
        }
    },
    getByName: async (name) => {
        try {
            const user = await User.findOne({
                where: {
                    name: name,
                },
                include: [Role],
            });
            return user;
        } catch (error) {
            throw error;
        }
    },
    getByRefreshToken: async (refreshToken) => {
        try {
            const user = await User.findOne({
                where: {
                    refreshToken: refreshToken,
                },
                include: [Role],
            });
            return user;
        } catch (error) {
            throw error;
        }
    },
    register: async (newUser) => {
        try {
            const user = await User.create(newUser);
            return user;
        } catch (error) {
            throw error;
        }
    },
    getByVerifyToken: async (verifyToken) => {
        try {
            const user = await User.findOne({
                where: {
                    verifyToken: verifyToken,
                },
            });
            return user;
        } catch (error) {
            throw error;
        }
    },
    getByRecoveryToken: async (recoveryToken) => {
        try {
            const user = await User.findOne({
                where: {
                    recoverToken: recoveryToken,
                },
            });
            return user;
        } catch (error) {
            throw error;
        }
    },
};

export default authRepository;
