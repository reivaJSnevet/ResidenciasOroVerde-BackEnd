import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/users", userController.createUser);
userRouter.get("/users", userController.getAllUsers);
userRouter.get("/users/:id", userController.getUserById);
userRouter.put("/users/:id", userController.updateUser);
userRouter.delete("/users/:id", userController.deleteUser);
//Fav properties
userRouter.post("/users/:id/favorite-properties/:propertyId", userController.addFavoriteProperty);
userRouter.delete("/users/:id/favorite-properties/:propertyId", userController.removeFavoriteProperty);
userRouter.get("/users/:id/favorite-properties", userController.getFavoriteProperties);
//Rating permissions
userRouter.post("/users/:id/rating-permissions/:propertyId", userController.addRatingPermission);
userRouter.delete("/users/:id/rating-permissions/:propertyId", userController.removeRatingPermission);

export default userRouter;
