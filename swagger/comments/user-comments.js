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


//ROUTES DEFINITION
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *        description: No autorizado
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crea un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Petición incorrecta, datos de usuario incompletos
 *       401:
 *        description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtiene un usuario por su id
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualiza un usuario por su id
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id del usuario
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Petición incorrecta, datos de usuario incompletos
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Elimina un usuario por su id
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 */
