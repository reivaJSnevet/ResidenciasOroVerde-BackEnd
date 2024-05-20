//SCHEMA DEFINITION
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          description: The auto-generated id of the user
 *        name:
 *          type: string
 *          description: The name of the user
 *        lastName:
 *          type: string
 *          description: The first last name of the user
 *        lastName2:
 *          type: string
 *          description: The second last name of the user
 *        email:
 *          type: string
 *          description: The email of the user
 *        password:
 *          type: string
 *          description: The password of the user
 *        phoneNumbers:
 *          type: object
 *          properties:
 *            principal: 
 *              type: string
 *              description: The principal phone number of the user
 *            secondary:
 *              type: string
 *              description: The secondary phone number of the user
 *          description: The phone numbers of the user
 *        isEmailVerify:
 *          type: boolean
 *          description: The email verification status of the user
 *        verifyToken:
 *          type: string
 *          description: The token used to verify the user's email
 *        refreshToken:
 *          type: string
 *          description: The token used to refresh the user's session
 *        recoverToken:
 *          type: string
 *          description: The token used to recover the user's password
 *      required:
 *        - name
 *        - lastName
 *        - lastName2
 *        - email
 *        - password
 *        - phoneNumbers
 *      example:
 *        id: "267317282"
 *        name: "Minder"
 *        lastName: "García"
 *        lastName2: "López"
 *        email: "juan@example.com"
 *        password: "Password123"
 *        phoneNumbers:
 *          principal: "123456789"
 *          secondary: "987654321"
 */