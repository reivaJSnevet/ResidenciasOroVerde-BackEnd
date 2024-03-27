import Category from "./Category.js";
import Comment from "./Comment.js";
import Property from "./Property.js";
import Rating from "./Rating.js";
import Role from "./Role.js";
import User from "./User.js";

Role.hasMany(User, { foreignKey: { allowNull: true }, onDelete: "SET NULL", onUpdate: "CASCADE" });
User.belongsTo(Role, { foreignKey: { allowNull: true }, onDelete: "SET NULL", onUpdate: "CASCADE" });

User.hasMany(Property, { foreignKey: { allowNull: false }, onDelete: "CASCADE", onUpdate: "CASCADE"  });
Property.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: "CASCADE", onUpdate: "CASCADE"  });

Category.belongsToMany(Property, { through: "property_category" } );
Property.belongsToMany(Category, { through: "property_category" });

User.hasMany(Comment, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });
Comment.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });

Property.hasMany(Comment, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });
Comment.belongsTo(Property, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });

User.belongsToMany(Property, { through: Rating });
Property.belongsToMany(User, { through: Rating });

export { Category, Comment, Property, Rating, Role, User };
