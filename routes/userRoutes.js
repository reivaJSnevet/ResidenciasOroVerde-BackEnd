import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/users", userController.createUser);
userRouter.get("/users", userController.getAllUsers);
userRouter.get("/users/:id", userController.getUserById);
userRouter.put("/users/:id", userController.updateUser);
userRouter.delete("/users/:id", userController.deleteUser);

export default userRouter;
