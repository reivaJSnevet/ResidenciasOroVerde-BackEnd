import { NotFoundError } from "../errors/index.js";
import propiedadRepository from "../repositories/PropiedadRepository.js";

const propiedadService = {
  createPropiedad: async (propiedad) => {
    try {
      const nuevaPropiedad = await propiedadRepository.create(propiedad);
      return nuevaPropiedad;
    } catch (error) {
      throw error;
    }
  },

  getAllPropiedades: async () => {
    try {
      const propiedades = await propiedadRepository.getAll();
      return propiedades;
    } catch (error) {
      throw error;
    }
  },

  getPropiedadById: async (id) => {
    try {
      const propiedad = await propiedadRepository.getById(id);
      if (!propiedad) {
        throw new NotFoundError("Propiedad", id);
      }
      return propiedad;
    } catch (error) {
      throw error;
    }
  },

  updatePropiedad: async (id, propiedad) => {
    try {
      const propiedadActualizada = await propiedadRepository.update(id, propiedad);
      if (!propiedadActualizada) {
        throw new NotFoundError("Propiedad", id);
      }
      return propiedadActualizada;
    } catch (error) {
      throw error;
    }
  },

  deletePropiedad: async (id) => {
    try {
      const propiedad = await propiedadRepository.getById(id);
      if (!propiedad) {
        throw new NotFoundError("Propiedad", id);
      }

      const propiedadEliminada = await propiedadRepository.delete(id);
      return propiedadEliminada;
    } catch (error) {
      throw error;
    }
  },

  createCalificacion: async (id, {usuarioId, calificacion}) => {
    try {
        const propiedad = await propiedadRepository.getById(id);
        if (!propiedad) {
          throw new NotFoundError("Propiedad", id);
        }else if (!propiedad.renta){
            throw new NotFoundError("Propiedad en alquiler", id);
        }

      const nuevaCalificacion = await propiedadRepository.createCalificacion(id, usuarioId, calificacion);
      return nuevaCalificacion;
    } catch (error) {
      throw error;
    }
  },

  updateCalificacion: async (idCalificacion, calificacion) => {
    try {
      const calificacionActualizada = await propiedadRepository.updateCalificacion(idCalificacion, calificacion);
      if (!calificacionActualizada) {
        throw new NotFoundError("Calificacion de Propiedad", idCalificacion);
      }
      return calificacionActualizada;
    } catch (error) {
      throw error;
    }
  },

  deleteCalificacion: async (idCalificacion) => {
    try {
      const calificacion = await propiedadRepository.deleteCalificacion(idCalificacion);
      if (!calificacion) {
        throw new NotFoundError("Calificacion de Propiedad", idCalificacion);
      }
      return calificacion;
    } catch (error) {
      throw error;
    }
  }
};

export default propiedadService;

