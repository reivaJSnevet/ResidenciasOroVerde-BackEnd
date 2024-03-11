import PropiedadService from "../services/PropiedadService.js";

const propiedadController = {

  postPropiedad: async (req, res, next) => {
    try {
      const nuevaPropiedad = await PropiedadService.createPropiedad(req.body);
      res.status(201).json(nuevaPropiedad);
    } catch (error) {
        next(error);
    }
  },

  getAllPropiedades: async (req, res, next) => {
    try {
      const propiedades = await PropiedadService.getAllPropiedades();
      res.status(200).json(propiedades);
    } catch (error) {
        next(error);
    }
  },

  getPropiedadById: async (req, res, next) => {
    try {
      const propiedad = await PropiedadService.getPropiedadById(req.params.id);
      res.status(200).json(propiedad);
    } catch (error) {
        next(error);
    }
  },

  putPropiedad: async (req, res,next) => {
    try {
      const propiedad = await PropiedadService.updatePropiedad(req.params.id, req.body);
      res.status(200).json(propiedad);
    } catch (error) {
        next(error);
    }
  },

  deletePropiedad: async (req, res, next) => {
    try {
      const propiedad = await PropiedadService.deletePropiedad(req.params.id);
      res.status(200).json(propiedad);
    } catch (error) {
        next(error);
    }
  },

  postCalificacion: async (req, res, next) => {
    try {
      const calificacion = await PropiedadService.createCalificacion(req.params.id, req.body);
      res.status(201).json(calificacion);
    } catch (error) {
        next(error);
    }
  },

  putCalificacion: async (req, res, next) => {
    try {
      const calificacion = await PropiedadService.updateCalificacion(req.params.id, req.body);
      res.status(200).json(calificacion);
    } catch (error) {
        next(error);
    }
  },

  deleteCalificacion: async (req, res, next) => {
    try {
      const calificacion = await PropiedadService.deleteCalificacion(req.params.id);
      res.status(200).json(calificacion);
    } catch (error) {
        next(error);
    }
  },

};

export default propiedadController;
