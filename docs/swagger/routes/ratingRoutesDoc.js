/**
 * @swagger
 * /ratings:
 *   get:
 *     summary: Obtiene todas las calificaciones
 *     tags: [Ratings]
 *     responses:
 *       200:
 *         description: Lista de calificaciones obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rating'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crea una nueva calificación
 *     tags: [Ratings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rating'
 *     responses:
 *       201:
 *         description: Calificación creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rating'
 *       400:
 *         description: Petición incorrecta, datos de la calificación incompletos
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /ratings/{id}:
 *   get:
 *     summary: Obtiene una calificación por su id
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id de la calificación
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Calificación obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rating'
 *       404:
 *         description: Calificación no encontrada
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualiza una calificación por su id
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id de la calificación
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rating'
 *     responses:
 *       200:
 *         description: Calificación actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rating'
 *       400:
 *         description: Petición incorrecta, datos de la calificación incompletos
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Elimina una calificación por su id
 *     tags: [Ratings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id de la calificación
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Calificación eliminada correctamente
 *       404:
 *         description: Calificación no encontrada
 *       500:
 *         description: Error interno del servidor
 */
