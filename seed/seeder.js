import db from "../config/db.js";
import { Rol, Usuario, Categoria, Propiedad, Comentario} from "../models/index.js";
import { roles, usuarios, categorias, propiedades, comentarios } from "./index.js";

const seeder = async () => {
    try {
        await db.authenticate();
        await db.sync({ force: true });

        await Rol.bulkCreate(roles);
        await Usuario.bulkCreate(usuarios);
        await Categoria.bulkCreate(categorias);
        await Propiedad.bulkCreate(propiedades);
        await Comentario.bulkCreate(comentarios);

        console.log(
            "\x1b[32m%s\x1b[0m",
            "A skilled seeder orchestrated a symphony of data growth, it planted the seeds of innovation, nurturing a flourishing garden of progress from a barren database."
        );
        process.exit(0);
    } catch (error) {
        console.log(
            "\x1b[31m%s\x1b[0m",
            "Unfortunately, the seeder encountered a glitch, leaving the database barren and the seeds of progress unattended.",
            "ERROR: ",
            error
        );
        process.exit(1);
    }
};

if (process.argv[2] === "-i") {
    seeder();
}
