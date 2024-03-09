import { Router } from "express";
import authController from "../controllers/AuthController.js";

const authRouter = Router();

authRouter.post("/auth/login", authController.login);
authRouter.get("/auth/logout", authController.logout);
authRouter.get("/auth/refresh-token", authController.handleRefreshToken);

export default authRouter;