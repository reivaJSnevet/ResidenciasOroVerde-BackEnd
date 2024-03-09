import authService from "../services/AuthService.js";

const authController = {
    login: async (req, res, next) => {
        try {
            const { correo, clave } = req.body;
            const {usuario, tokenAcceso, tokenRefrescar} = await authService.login(correo, clave);

            res.cookie("tokenRefrescar", tokenRefrescar, {
                httpOnly: true,
                sameSite: "none",
                secure: true,
                /* signed: true, */
                maxAge: 600000,
            });

            res.status(200).json({usuario, tokenAcceso});
        } catch (error) {
            next(error);
        }
    },
    logout: async (req, res, next) => {
        try {
            const tokenRefrescar = req.cookies.tokenRefrescar;

            if (!tokenRefrescar) {
                throw new UnauthorizedError( req.originalUrl, tokenRefrescar);
            }

            await authService.logout(tokenRefrescar);

            res.clearCookie("tokenRefrescar");
            res.status(200).json({message: "Sesión cerrada"});
        } catch (error) {
            next(error);
        }
    },
    handleRefreshToken: async (req, res, next) => {
        try {
            const tokenRefrescar = req.cookies.tokenRefrescar;

            if (!tokenRefrescar) {
                throw new UnauthorizedError( req.originalUrl, tokenRefrescar);
            }

            const {usuario, tokenAcceso} = await authService.handleRefreshToken(tokenRefrescar);

            res.cookie("tokenRefrescar", tokenRefrescar, {
                httpOnly: true,
                sameSite: "none",
                secure: true,
                /* signed: true, */
                maxAge: 600000,
            });

            res.status(200).json({usuario, tokenAcceso});
        } catch (error) {
            next(error);
        }
    },
};

export default authController;