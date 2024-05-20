/**
 * @swagger
 * components:
 *  schemas:
 *    Category:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          description: El id autogenerado de la categoría
 *        name:
 *          type: string
 *          description: El nombre de la categoría
 *      required:
 *        - id
 *        - name
 *      example:
 *        id: "1a2b3c4d"
 *        name: "Electrónica"
 */