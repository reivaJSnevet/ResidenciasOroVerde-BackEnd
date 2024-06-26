/**
 * @fileOverview This file contains the main server code for the backend application.
 * It initializes the Express server, establishes a connection to the database,
 * sets up middleware, defines routes, and starts the server.
 * @module index.js
 */

//importing Node.js modules
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

//importing configuration files
import db from "./config/db.js";
import corsOptions from "./config/corsOptions.js";
import transporter from "./config/nodemailer.js";
import swaggerJSDoc from "./config/swagger.js";

//importing middleware
import errorHandler from "./middlewares/errorHandler.js";
import verifyJWT from "./middlewares/verifyJWT.js";
import requireJWT from "./middlewares/requireJWT.js";
/* import credentials from "./middlewares/credentials.js"; */

import {
    authRoutes,
    contactRoute,
    categoryRoutes,
    commentRoutes,
    propertyRoutes,
    ratingRoutes,
    roleRoutes,
    userRoutes,
} from "./routes/index.js";

//creating an instance of the Express server
const app = express();

//setting up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
swaggerJSDoc(app);

/* app.use(credentials); */

/**
 * Establishes a connection to the database and synchronizes the models.
 * @async
 * @function DbConnection
 */
async function dbConnection() {
    try {
        //establishing a connection to the database
        await db.authenticate();
        console.log(
            "\x1b[36m%s\x1b[0m",
            "Connection has been established successfully."
        );

        try {
            //synchronizing the models with the database
            await db.sync({ force: false });
            console.log(
                "\x1b[36m%s\x1b[0m",
                "All models were synchronized successfully."
            );
        } catch (error) {
            console.error(
                "\x1b[31m%s\x1b[0m",
                "Unable to synchronize the models with the database:",
                error
            );
        }
    } catch (error) {
        console.error(
            "\x1b[31m%s\x1b[0m",
            "Unable to connect to the database:",
            error
        );
    }
}
//calling the function to establish a connection to the database
await dbConnection();

//verifying the connection to the transporter
async function NodemailerConnection() {
    try {
        await transporter.verify();
        console.log(
            "\x1b[36m%s\x1b[0m",
            "Nodemailer's transporter connection successful"
        );
    } catch (error) {
        console.error(
            "\x1b[31m%s\x1b[0m",
            "Unable to connect to the transporter:",
            error
        );
    }
};

//calling the function to establish a connection to the transporter
/* await NodemailerConnection(); */


//defining public 
app.use("/api", contactRoute);
app.use("/api", categoryRoutes);
app.use("/api", authRoutes);
app.use("/api", verifyJWT);
app.use("/api", propertyRoutes);

//defining private routes
app.use("/api", requireJWT);
app.use("/api", roleRoutes);
app.use("/api", userRoutes);


app.use("/api", userRoutes);
app.use("/api", ratingRoutes);
app.use("/api", commentRoutes);

//catch-all routes not found
app.use((req, res, next) => {
    res.status(404).json({
        error: "Not found",
        message: `The resource ${req.originalUrl} was not found`,
    });
});

//error handling middleware
app.use(errorHandler);

//starting the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(
        "\x1b[32m%s\x1b[0m",
        `Server started. The server is running on Port: ${port}`
    );
});
