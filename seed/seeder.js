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

        await newProperties[0].addCategories(newCategories[1]);
        await newProperties[1].addCategories(newCategories[0]);
        await newProperties[2].addCategories(newCategories[4]);
        await newProperties[3].addCategories(newCategories[2]);
        await newProperties[4].addCategories(newCategories[2]);
        await newProperties[5].addCategories(newCategories[12]);
        await newProperties[6].addCategories(newCategories[9]);
        await newProperties[7].addCategories(newCategories[5]);
        await newProperties[8].addCategories(newCategories[2]);
        await newProperties[9].addCategories(newCategories[2]);
        await newProperties[10].addCategories(newCategories[7]);
        await newProperties[11].addCategories(newCategories[12]);
        await newProperties[12].addCategories(newCategories[3]);
        await newProperties[13].addCategories(newCategories[2]);
        await newProperties[14].addCategories(newCategories[12]);
        await newProperties[15].addCategories(newCategories[7]);
        await newProperties[16].addCategories(newCategories[4]);
        await newProperties[17].addCategories(newCategories[4]);
     

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
