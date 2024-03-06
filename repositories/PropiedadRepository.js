import {Propiedad} from "../models/index.js";

const propiedadRepository = {
    
  create: async (propiedad) => {
    try {
      const nuevaPropiedad = await Propiedad.create(propiedad);
      return nuevaPropiedad;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    try {
      const propiedades = await Propiedad.findAll();
      return propiedades;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
        const propiedad = await Propiedad.findByPk(id);
        return propiedad;
      } catch (error) {
        throw error;
      }
    },
  

    update: async (id, actualizarPropiedad) => {
      try {
          const propiedadActualizada = await Propiedad.update(actualizarPropiedad, {
              where: { id },
              individualHooks: true,
          });
          return propiedadActualizada [1][0];
      } catch (error) {
          throw error;
      }
  },

  delete: async (id) => {
      try {
          const propiedad = await Propiedad.destroy({
              where: { id },
              individualHooks: true,
          });
          return rol;
      } catch (error) {
          throw error;
      }
  },
};

export default propiedadRepository;