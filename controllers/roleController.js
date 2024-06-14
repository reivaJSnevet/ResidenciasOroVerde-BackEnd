import roleService from "../services/roleService.js";

const roleController = {
  postRole: async (req, res, next) => {
    try {
      const role = await roleService.createRole(req.body);
      res.status(201).json(role);
    } catch (error) {
      next(error);
    }
  },
  getAllRoles: async (req, res, next) => {
    try {
      const roles = await roleService.getAllRoles();
      res.status(200).json(roles);
    } catch (error) {
      next(error);
    }
  },
  getRoleById: async (req, res, next) => {
    try {
      const role = await roleService.getRoleById(req.params.id);
      res.status(200).json(role);
    } catch (error) {
      next(error);
    }
  },
  putRole: async (req, res, next) => {
    try {
      const role = await roleService.updateRole(req.params.id, req.body);
      res.status(200).json(role);
    } catch (error) {
      next(error);
    }
  },
  deleteRole: async (req, res, next) => {
    try {
      const role = await roleService.deleteRole(req.params.id);
      res.status(200).json(role);
    } catch (error) {
      next(error);
    }
  },
};

export default roleController;
