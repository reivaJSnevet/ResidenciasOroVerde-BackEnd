import Rol from "./Rol.js";
import Usuario from "./Usuario.js";
import Propiedad from "./Propiedad.js";
import Categoria from "./Categoria.js";
import Comentario from "./Comentario.js";
import Calificacion from "./Calificacion.js";

Rol.hasOne(Usuario);
Usuario.belongsTo(Rol);

Usuario.hasMany(Propiedad, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });
Propiedad.belongsTo(Usuario);

Categoria.belongsToMany(Propiedad, { through: "propiedad_categoria" });
Propiedad.belongsToMany(Categoria, { through: "propiedad_categoria" });

Usuario.hasMany(Comentario);
Comentario.belongsTo(Usuario);

Propiedad.hasMany(Comentario);
Comentario.belongsTo(Propiedad);

Usuario.belongsToMany(Propiedad, { through: Calificacion });
Propiedad.belongsToMany(Usuario, { through: Calificacion }) ;

export { Rol, Usuario, Propiedad, Categoria, Comentario, Calificacion };
