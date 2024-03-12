import authRepository from "../repositories/AuthRepository.js";
import { generateEmailToken } from "../utils/tokens/emailVerifyToken.js";
import sendVerificationEmail from "../utils/emails/verificationEmail.js";
import sendForgotPasswordEmail from "../utils/emails/forgotPasswordEmail.js";
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

            const valid = await usuario.validarClave(clave);
            
            if (!valid) {
                throw new UnauthorizedError("Contraseña incorrecta", null);
            }

            if (!usuario.verificarEmail) {
                throw new UnauthorizedError("Correo sin verificar", null);
            }

            const tokenAcceso = generateAccessToken(usuario);
            const tokenRefrescar = generateRefreshToken(usuario);

            
            usuario.tokenRefrescar = tokenRefrescar;
            await usuario.save();

            delete usuario.dataValues.clave;
            delete usuario.dataValues.tokenRefrescar;

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
            const decoded = await verifySignature(
                tokenRefrescar,
                process.env.JWT_REFRESH_SECRET
            );

            if (!decoded) {
                throw new UnauthorizedError("Token inválido", tokenRefrescar);
            }

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
            const decoded = await verifySignature(
                tokenRefrescar,
                process.env.JWT_REFRESH_SECRET
            );

            if (!decoded) {
                throw new UnauthorizedError("Token inválido", tokenRefrescar);
            }

            const usuario = await authRepository.getByRefreshToken(
                tokenRefrescar
            );

            if (!usuario) {
                throw new UnauthorizedError(
                    "Usuario no registrado",
                    tokenRefrescar
                );
            }

            delete usuario.dataValues.clave;
            const tokenAcceso = generateAccessToken(usuario);
            return {
                usuario,
                tokenAcceso,
            };
        } catch (error) {
            throw error;
        }
    },
    register: async (nuevoUsuario) => {
        try {
            const usuario = await authRepository.register({...nuevoUsuario, tokenVerificar: generateEmailToken(), verificarEmail: false});
            delete usuario.dataValues.clave;
            await sendVerificationEmail(usuario.correo, usuario.tokenVerificar);
            return usuario;
        } catch (error) {
            throw error;
        }
    },
    confirmEmail: async (token) => {
        try {
            const usuario = await authRepository.getByTokenVerificar(token);

            if (!usuario) {
                throw new UnauthorizedError("Token inválido", token);
            }

            usuario.verificarEmail = true;
            usuario.tokenVerificar = null;
            await usuario.save();
        } catch (error) {
            throw error;
        }
    },
    forgotPassword: async (correo) => {
        try {
            const usuario = await authRepository.getByCorreo(correo);

            if (!usuario) {
                throw new UnauthorizedError("Usuario no registrado", null);
            }

            if (!usuario.verificarEmail) {
                throw new UnauthorizedError("Correo sin verificar", null);
            }

            usuario.tokenRecuperar = generateEmailToken();
            await usuario.save();
            await sendForgotPasswordEmail(usuario.correo, usuario.tokenReset);
        } catch (error) {
            throw error;
        }
    },
    resetPassword: async (token, clave) => {
        try {
            const usuario = await authRepository.getByTokenRecuperar(token);

            if (!usuario) {
                throw new UnauthorizedError("Token inválido", token);
            }

            usuario.clave = clave;
            usuario.tokenRecuperar = null;
            await usuario.save();
        } catch (error) {
            throw error;
        }
    },
};

export default authService;
