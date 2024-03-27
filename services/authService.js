import { UnauthorizedError } from "../errors/index.js";
import authRepository from "../repositories/authRepository.js";
import sendVerificationEmail from "../utils/emails/verificationEmail.js";
import sendForgotPasswordEmail from "../utils/emails/forgotPasswordEmail.js";
import { generateEmailToken } from "../utils/tokens/emailVerifyToken.js";
import {
    generateAccessToken,
    generateRefreshToken,
    verifySignature,
} from "../utils/tokens/jwt.js";

const authService = {
    login: async (email, password) => {
        try {
            const user = await authRepository.getByEmail(email);

            if (!user) {
                throw new UnauthorizedError("Usuario no registrado", null);
            }

            const valid = await user.validatePassword(password);
            if (!valid) {
                throw new UnauthorizedError("Contraseña incorrecta", null);
            }

            if (!user.isEmailVerify) {
                throw new UnauthorizedError("Correo sin verificar", null);
            }

            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);

            user.refreshToken = refreshToken;
            await user.save();

            delete user.dataValues.password;
            delete user.dataValues.refreshToken;
            delete user.dataValues.verifyToken;
            delete user.dataValues.recoverToken;

            return {
                user,
                accessToken,
                refreshToken,
            };
        } catch (error) {
            throw error;
        }
    },
    logout: async (refreshToken) => {
        try {
            const decoded = await verifySignature(
                refreshToken,
                process.env.JWT_REFRESH_SECRET
            );

            if (!decoded) {
                throw new UnauthorizedError("Token inválido", refreshToken);
            }

            const user = await authRepository.getByRefreshToken(refreshToken);

            if (!user) {
                throw new UnauthorizedError(
                    "Usuario no registrado",
                    refreshToken
                );
            }

            user.refreshToken = null;
            await user.save();
        } catch (error) {
            throw error;
        }
    },
    handleRefreshToken: async (refreshToken) => {
        try {
            const decoded = await verifySignature(
                refreshToken,
                process.env.JWT_REFRESH_SECRET
            );

            if (!decoded) {
                throw new UnauthorizedError("Token inválido", refreshToken);
            }

            const user = await authRepository.getByRefreshToken(refreshToken);

            if (!user) {
                throw new UnauthorizedError(
                    "Usuario no registrado",
                    refreshToken
                );
            }

            delete user.dataValues.password;
            const accessToken = generateAccessToken(user);
            return {
                user,
                accessToken,
            };
        } catch (error) {
            throw error;
        }
    },
    register: async (newUser) => {
        try {
            const user = await authRepository.register({
                ...newUser,
                verifyToken: generateEmailToken(),
                isEmailVerify: false,
            });
            delete user.dataValues.password;
            await sendVerificationEmail(user.email, user.verifyToken);
            return user;
        } catch (error) {
            throw error;
        }
    },
    confirmEmail: async (verifyToken) => {
        try {
            const user = await authRepository.getByVerifyToken(verifyToken);

            if (!user) {
                throw new UnauthorizedError("Token inválido", verifyToken);
            }

            user.isEmailVerify = true;
            user.verifyToken = null;
            await user.save();
        } catch (error) {
            throw error;
        }
    },
    forgotPassword: async (email) => {
        try {
            const user = await authRepository.getByEmail(email);

            if (!user) {
                throw new UnauthorizedError("Usuario no registrado", null);
            }

            if (!user.isEmailVerify) {
                throw new UnauthorizedError("Correo sin verificar", null);
            }

            user.recoverToken = generateEmailToken();
            await user.save();
            await sendForgotPasswordEmail(user.email, user.recoverToken);
        } catch (error) {
            throw error;
        }
    },
    resetPassword: async (recoverToken, password) => {
        try {
            const user = await authRepository.getByRecoveryToken(recoverToken);

            if (!user) {
                throw new UnauthorizedError("Token inválido", recoverToken);
            }

            user.password = password;
            user.recoverToken = null;
            await user.save();
        } catch (error) {
            throw error;
        }
    },
};

export default authService;
