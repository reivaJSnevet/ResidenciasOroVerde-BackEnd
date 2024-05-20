/**
 * @swagger
 * components:
 *  schemas:
 *    Rating:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          description: El id autogenerado de la calificación
 *        score:
 *          type: number
 *          format: float
 *          description: La calificación de la propiedad
 *      required:
 *        - id
 *        - score
 *      example:
 *        id: "1a2b3c4d"
 *        score: 4.5
 */