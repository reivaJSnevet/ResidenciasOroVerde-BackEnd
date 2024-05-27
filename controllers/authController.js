import authService from "../services/authService.js";

const authController = {
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const { user, accessToken, refreshToken } = await authService.login(
                email,
                password
            );

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                sameSite: "none",
                secure: true,
                /* signed: true, */
                maxAge: 3600000,
            });

            res.status(200).json({ user, accessToken });
        } catch (error) {
            next(error);
        }
    },
    logout: async (req, res, next) => {
        try {
            const refreshToken = req.cookies.refreshToken;

            await authService.logout(refreshToken);

            res.clearCookie("refreshToken", {
                httpOnly: true,
                sameSite: "none",
                secure: true,
            });
            res.status(200).json({ message: "Sesión cerrada" });
        } catch (error) {
            next(error);
        }
    },
    handleRefreshToken: async (req, res, next) => {
        try {
            const refreshToken = req.cookies.refreshToken;

            const { user, accessToken } = await authService.handleRefreshToken(
                refreshToken
            );

            res.status(200).json({ user, accessToken });
        } catch (error) {
            next(error);
        }
    },
    register: async (req, res, next) => {
        try {
            const user = await authService.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    },
    confirmEmail: async (req, res, next) => {
        try {
            await authService.confirmEmail(req.params.token);
            res.status(200).json({ message: "Correo confirmado" });
        } catch (error) {
            next(error);
        }
    },
    forgotPassword: async (req, res, next) => {
        try {
            await authService.forgotPassword(req.body.email);
            res.status(200).json({ message: "Correo enviado" });
        } catch (error) {
            next(error);
        }
    },
    resetPassword: async (req, res, next) => {
        try {
            await authService.resetPassword(req.params.token, req.body.password);
            res.status(200).json({ message: "Clave cambiada" });
        } catch (error) {
            next(error);
        }
    },
};

export default authController;
