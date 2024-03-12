import {Propiedad, Calificacion} from "../models/index.js";

const propiedadRepository = {
    
  create: async (propiedad) => {
    try {
      const nuevaPropiedad = await Propiedad.create(propiedad);
      return nuevaPropiedad;
    } catch (error) {
      throw error;
    }
  },

  getAll: async (page, size) => {
    try {
        const options = {};

        if (page && size) {
            options.limit = +size;
            options.offset =  (+page -1 ) * (+size) ;
        }   

      const propiedades = await Propiedad.findAll(options);
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
          return propiedad;
      } catch (error) {
          throw error;
      }
  },

  createCalificacion: async (id, usuarioId, calificacion) => {
        try {
            const nuevaCalificacion = await Calificacion.create({PropiedadId: id, UsuarioId: usuarioId, calificacion});
            return nuevaCalificacion;
        } catch (error) {
            throw error;
        }
    },

    updateCalificacion: async (idCalificacion, calificacion) => {
        try {
            const calificacionActualizada = await Calificacion.update(calificacion, {
                where: { id: idCalificacion },
                individualHooks: true,
            });
            return calificacionActualizada [1][0];
        } catch (error) {
            throw error;
        }
    },

    deleteCalificacion: async (idCalificacion) => {
        try {
            const calificacion = await Calificacion.destroy({
                where: { id: idCalificacion },
                individualHooks: true,
            });
            return calificacion;
        } catch (error) {
            throw error;
        }
    },
};

export default propiedadRepository;