import express from "express";
import db from "./config/db.js";

import { rolRoute } from "./routes/index.js";
import usuarioRouter from "./routes/UserRoutes.js";
import propiedadRouter from "./routes/PropiedadRoutes.js";
import categoriaRouter from "./routes/CategoriaRoutes.js";
import comentarioRouter from "./routes/ComentarioRoutes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function dbConnection() {
  try {
    await db.authenticate();
    console.log(
      "\x1b[33m%s\x1b[0m",
      "Connection has been established successfully."
    );
    try{
        await db.sync({ force: false });
        console.log(
            "\x1b[33m%s\x1b[0m",
            "All models were synchronized successfully."
        );
    }
    catch (error){
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

await dbConnection();

app.use("/api", rolRoute);
app.use("/api", usuarioRouter);
app.use("/api", propiedadRouter);
app.use("/api", categoriaRouter);
app.use("/api", comentarioRouter);

const port = 3000;
app.listen(port, () => {
  console.log(
    "\x1b[32m%s\x1b[0m",
    `Server started. The server is running on Port: ${port}`
  );
});
