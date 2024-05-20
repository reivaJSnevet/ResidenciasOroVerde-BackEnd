/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Obtiene todos los comentarios
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: Lista de comentarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crea un nuevo comentario
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       201:
 *         description: Comentario creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       400:
 *         description: Petición incorrecta, datos del comentario incompletos
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     summary: Obtiene un comentario por su id
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id del comentario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comentario obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       404:
 *         description: Comentario no encontrado
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualiza un comentario por su id
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id del comentario
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: Comentario actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       400:
 *         description: Petición incorrecta, datos del comentario incompletos
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Elimina un comentario por su id
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id del comentario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comentario eliminado correctamente
 *       404:
 *         description: Comentario no encontrado
 *       500:
 *         description: Error interno del servidor
 */