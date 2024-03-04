import RolService from "../services/RolService.js";

const rolController = {
  postRol: async (req, res) => {
    try {
      const newRol = await RolService.createRol(req.body);
      res.status(201).json(newRol);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  getAllRoles: async (req, res) => {
    try {
      const roles = await RolService.getAllRoles();
      res.status(200).json(roles);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  getRolById: async (req, res) => {
    try {
      const rol = await RolService.getRolById(req.params.id);
      res.status(200).json(rol);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  putRol: async (req, res) => {
    try {
      const rol = await RolService.updateRol(req.params.id, req.body);
      res.status(200).json(rol);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  deleteRol: async (req, res) => {
    try {
      const rol = await RolService.deleteRol(req.params.id);
      res.status(200).json(rol);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
};

export default rolController;
