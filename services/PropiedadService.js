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
        throw new Error("Propiedad no encontrada", id);
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
        throw new Error("Propiedad no encontrada", id);
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
        throw new Error("Propiedad no encontrada", id);
      }

      const propiedadEliminada = await propiedadRepository.delete(id);
      return propiedadEliminada;
    } catch (error) {
      throw error;
    }
  },
};

export default propiedadService;

