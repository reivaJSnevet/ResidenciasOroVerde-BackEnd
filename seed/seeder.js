import db from "../config/db.js";
import { Role, User, Category, Property, Comment, Rating} from "../models/index.js";
import { roles, users, categories, properties, comments, ratings } from "./index.js";

const seeder = async () => {
    try {
        await db.authenticate();
        await db.sync({ force: true });

        await Role.bulkCreate(roles);
        await User.bulkCreate(users);
        const newCategories = await Category.bulkCreate(categories);
        const newProperties = await Property.bulkCreate(properties);
        await Comment.bulkCreate(comments);
        await Rating.bulkCreate(ratings);

        await newProperties[0].addCategories(newCategories[15]);
        await newProperties[1].addCategories(newCategories[2]);
        await newProperties[2].addCategories(newCategories[12]);


        

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
            error.message
        );
        process.exit(1);
    }
};

if (process.argv[2] === "-i") {
    seeder();
}
