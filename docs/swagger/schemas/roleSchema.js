/**
 * @swagger
 * components:
 *  schemas:
 *    Role:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          description: El id autogenerado del rol
 *        name:
 *          type: string
 *          description: El nombre del rol
 *          minLength: 3
 *          maxLength: 50
 *      required:
 *        - id
 *        - name
 *      example:
 *        id: "1a2b3c4d"
 *        name: "Administrador"
 */