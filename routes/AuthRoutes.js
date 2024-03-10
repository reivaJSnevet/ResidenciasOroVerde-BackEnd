import { Router } from "express";
import authController from "../controllers/AuthController.js";

const authRouter = Router();

authRouter.post("/auth/login", authController.login);
authRouter.get("/auth/logout", authController.logout);
authRouter.get("/auth/refresh-token", authController.handleRefreshToken);
authRouter.post("/auth/register", authController.register);
authRouter.get("/auth/correo-confirmacion/:token", authController.confirmEmail);
authRouter.post("/auth/forgot-password", authController.forgotPassword);
authRouter.post("/auth/reset-password/:token", authController.resetPassword);

export default authRouter;