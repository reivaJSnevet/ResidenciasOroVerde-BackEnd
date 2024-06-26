import Category from "./Category.js";
import Comment from "./Comment.js";
import Property from "./Property.js";
import Rating from "./Rating.js";
import Role from "./Role.js";
import User from "./User.js";

Role.hasMany(User, { foreignKey: { allowNull: true }, onDelete: "SET NULL", onUpdate: "CASCADE" });
User.belongsTo(Role, { foreignKey: { allowNull: true }, onDelete: "SET NULL", onUpdate: "CASCADE" });

User.hasMany(Property, { foreignKey: { allowNull: false }, onDelete: "CASCADE", onUpdate: "CASCADE", as: "properties" });
Property.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: "CASCADE", onUpdate: "CASCADE", as: "User"});

Category.belongsToMany(Property, { through: "property_category" } );
Property.belongsToMany(Category, { through: "property_category" });

User.hasMany(Comment, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });
Comment.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });

Property.hasMany(Comment, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });
Comment.belongsTo(Property, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });

User.belongsToMany(Property, { through: Rating, as: "ratings"});
Property.belongsToMany(User, { through: Rating, as: "ratings"});

User.belongsToMany(Property, { through: "favorite_properties", as: "favoriteProperties"});
Property.belongsToMany(User, { through: "favorite_properties", as: "favoriteProperties"});

User.belongsToMany(Property, { through: "property_rating_permissions", as: "ratingPermissions"});
Property.belongsToMany(User, { through: "property_rating_permissions", as: "ratingPermissions"});

export { Category, Comment, Property, Rating, Role, User };
