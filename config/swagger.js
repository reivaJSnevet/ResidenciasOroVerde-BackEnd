import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "OroVerde API",
            version: "1.0.0",
            description: "A simple Express API for OroVerde project. This API is part of the OroVerde project, a project for the Web development course at the Universidad Nacional de Costa Rica. The project is a web application that allows users to create and manage properties for rent or sale.",
        },
        servers: [
            {
                url: "http://localhost:3000/api/",
                description: "Local server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: [
        './docs/swagger/schemas/*.js',
        './docs/swagger/routes/*.js'
    ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    app.get("/api-docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
};

export default swaggerDocs;