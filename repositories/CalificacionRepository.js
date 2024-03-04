import {Calificacion} from '../models/index.js'

const calificacionRepository = {

    create: async (calificacion) => {
        try {
            const nuevaCalificacion = await Calificacion.create(calificacion);
            return nuevaCalificacion;
        } catch (error) {
            throw error;
        }
    },

    getAll: async () => {
        try {
            const calificaciones = await Calificacion.findAll();
            return calificaciones;
        } catch (error) {
            throw error;
        }
    },

    getById: async (id) => {
        try {
            const calificacion = await Calificacion.findByPk(id);
            return calificacion;
        } catch (error) {
            throw error;
        }
    },

    update: async (id, calificacion) => {
        try {
           const calificacionActualizada = await Calificacion.update(calificacion, {
                where: {
                     id
                }
              });
                return calificacionActualizada[1][0];
        } catch (error) {
            throw error;
        }
    },

    delete: async (id) => {
        try {
           const calificacion = Calificacion.destroy({ where: { id }});
            return calificacion;
        } catch (error) {
            throw error;
        }
    }
}

export default calificacionRepository;
