import calificacionRepository from '../repositories/CalificacionRepository';

const calificacionService = {

    createCalificacion: async (calificacion) => {
        try {
            const nuevaCalificacion = await calificacionRepository.create(calificacion);
            return nuevaCalificacion;
        } catch (error) {
            throw error;
        }
    },

    geyAllCalificaciones: async () => {
        try {
            const calificaciones = await calificacionRepository.getAll();
            return calificaciones;
        } catch (error) {
            throw error;
        }
    },

    getCalificacionById: async (id) => {
        try {
            const calificacion = await calificacionRepository.getById(id);
            if (!calificacion) {
                throw new Error('Calificacion no encontrada');
            }
            return calificacion;
        } catch (error) {
            throw error;
        }
    },

    updateCalificacion: async (id, calificacion) => {
        try {
            const calificacionUpdated = await calificacionRepository.update(id, calificacion);
            if (!calificacionUpdated) {
                throw new Error('Calificacion no encontrada');
            }
            return calificacionUpdated;
        } catch (error) {
            throw error;
        }
    },

    deleteCalificacion: async (id) => {
        try {
           const calificacion = await calificacionRepository.delete(id);
            if (!calificacion) {
                throw new Error('Calificacion no encontrada');
            }

            const calificacionDeleted = await calificacionRepository.delete(id);
            return calificacionDeleted;
        } catch (error) {
            throw error;
        }
    }
};

export default calificacionService;