import { Router } from "express";
import usuarioController from "../controllers/UsuarioController.js";

const usuarioRouter = Router();

usuarioRouter.post("/usuarios", usuarioController.createUsuario);
usuarioRouter.get("/usuarios", usuarioController.getAllUsuarios);
usuarioRouter.get("/usuarios/:id", usuarioController.getUsuarioById);
usuarioRouter.put("/usuarios/:id", usuarioController.updateUsuario);
usuarioRouter.delete("/usuarios/:id", usuarioController.deleteUsuario);

export default usuarioRouter;
