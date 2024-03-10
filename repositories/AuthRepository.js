import { Usuario, Rol } from "../models/index.js";

const authRepository = {
    getByCorreo: async (correo) => {
        try {
            const usuario = await Usuario.findOne({
                where: {
                    correo: correo,
                },
                include: [Rol],
            });
            return usuario;
        } catch (error) {
            throw error;
        }
    },
    getByName: async (nombre) => {
        try {
            const usuario = await Usuario.findOne({
                where: {
                    nombre: nombre,
                },
                include: [Rol],
            });
            return usuario;
        } catch (error) {
            throw error;
        }
    },
    getByRefreshToken: async (tokenRefrescar) => {
        try {
            const usuario = await Usuario.findOne({
                where: {
                    tokenRefrescar: tokenRefrescar,
                },
                include: [Rol],
            });
            return usuario;
        } catch (error) {
            throw error;
        }
    },
    register: async (nuevoUsuario) => {
        try {
            const usuario = await Usuario.create(nuevoUsuario);
            return usuario;
        } catch (error) {
            throw error;
        }
    },
    getByTokenVerificar: async (tokenVerificar) => {
        try {
            const usuario = await Usuario.findOne({
                where: {
                    tokenVerificar: tokenVerificar,
                },
            });
            return usuario;
        } catch (error) {
            throw error;
        }
    },
};

export default authRepository;
