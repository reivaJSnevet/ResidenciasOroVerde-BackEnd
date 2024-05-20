/**
 * @swagger
 * components:
 *  schemas:
 *    Comment:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          description: El id autogenerado del comentario
 *        content:
 *          type: string
 *          description: El contenido del comentario
 *        date:
 *          type: string
 *          format: date-time
 *          description: La fecha en que se creó el comentario
 *      required:
 *        - id
 *        - content
 *        - date
 *      example:
 *        id: "1a2b3c4d"
 *        content: "Este es un comentario de ejemplo."
 *        date: "2024-05-20T12:34:56.789Z"
 */