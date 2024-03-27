import userService from "../services/userService.js";

const userController = {
    createUser: async (req, res, next) => {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    },
    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    },
    getUserById: async (req, res, next) => {
        try {
            const user = await userService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const user = await userService.updateUser(req.params.id, req.body);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const user = await userService.deleteUser(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
}

export default userController;