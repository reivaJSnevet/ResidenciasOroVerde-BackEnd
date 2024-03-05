import RolService from "../services/RolService.js";

const rolController = {
  postRol: async (req, res, next) => {
    try {
      const newRol = await RolService.createRol(req.body);
      res.status(201).json(newRol);
    } catch (error) {
      next(error);
    }
  },

  getAllRoles: async (req, res, next) => {
    try {
      const roles = await RolService.getAllRoles();
      res.status(200).json(roles);
    } catch (error) {
      next(error);
    }
  },

  getRolById: async (req, res, next) => {
    try {
      const rol = await RolService.getRolById(req.params.id);
      res.status(200).json(rol);
    } catch (error) {
      next(error);
    }
  },

  putRol: async (req, res, next) => {
    try {
      const rol = await RolService.updateRol(req.params.id, req.body);
      res.status(200).json(rol);
    } catch (error) {
      next(error);
    }
  },

  deleteRol: async (req, res, next) => {
    try {
      const rol = await RolService.deleteRol(req.params.id);
      res.status(200).json(rol);
    } catch (error) {
      next(error);
    }
  },
};

export default rolController;
