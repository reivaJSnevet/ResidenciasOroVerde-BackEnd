import authRepository from "../repositories/AuthRepository.js";
import { UnauthorizedError } from "../errors/index.js";
import {
    generateAccessToken,
    generateRefreshToken,
    verifySignature,
} from "../utils/tokens/jwt.js";

const authService = {
    login: async (correo, clave) => {
        try {
            const usuario = await authRepository.getByCorreo(correo);

            if (!usuario) {
                throw new UnauthorizedError("Usuario no registrado", null);
            }

            if (!usuario.validarClave(clave)) {
                throw new UnauthorizedError("Contraseña incorrecta", null);
            }

            if (!usuario.verificarEmail) {
                throw new UnauthorizedError("Correo sin verificar", null);
            }

            delete usuario.dataValues.clave;

            const tokenAcceso = generateAccessToken(usuario);
            const tokenRefrescar = generateRefreshToken(usuario);

            usuario.tokenRefrescar = tokenRefrescar;
            await usuario.save();

            return {
                usuario,
                tokenAcceso,
                tokenRefrescar,
            };
        } catch (error) {
            throw error;
        }
    },
    logout: async (tokenRefrescar) => {
        try {
            const usuario = await authRepository.getByRefreshToken(
                tokenRefrescar
            );

            if (!usuario) {
                throw new UnauthorizedError(
                    "Usuario no registrado",
                    tokenRefrescar
                );
            }

            usuario.tokenRefrescar = null;
            await usuario.save();
        } catch (error) {
            throw error;
        }
    },
    handleRefreshToken: async (tokenRefrescar) => {
        try {
            const usuario = await authRepository.getByRefreshToken(
                tokenRefrescar
            );

            if (!usuario) {
                throw new UnauthorizedError(
                    "Usuario no registrado",
                    tokenRefrescar
                );
            }

            const decoded = await verifySignature(
                tokenRefrescar,
                process.env.JWT_REFRESH_SECRET
            );

            if (!decoded) {
                throw new UnauthorizedError("Token inválido", tokenRefrescar);
            }

            delete user.dataValues.clave;
            const tokenAcceso = generateAccessToken(usuario);
            return {
                usuario,
                tokenAcceso,
            };
        } catch (error) {
            throw error;
        }
    },
};

export default authService;
