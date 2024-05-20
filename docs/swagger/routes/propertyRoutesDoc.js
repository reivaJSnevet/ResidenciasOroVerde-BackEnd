/**
 * @swagger
 * /properties:
 *   get:
 *     summary: Obtiene todas las propiedades
 *     tags: [Properties]
 *     responses:
 *       200:
 *         description: Lista de propiedades obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Property'
 *       500:
 *         description: Error interno del servidor
 *   post:
 *     summary: Crea una nueva propiedad
 *     tags: [Properties]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Property'
 *     responses:
 *       201:
 *         description: Propiedad creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Property'
 *       400:
 *         description: Petición incorrecta, datos de la propiedad incompletos
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /properties/{id}:
 *   get:
 *     summary: Obtiene una propiedad por su id
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id de la propiedad
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Propiedad obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Property'
 *       404:
 *         description: Propiedad no encontrada
 *       500:
 *         description: Error interno del servidor
 *   put:
 *     summary: Actualiza una propiedad por su id
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id de la propiedad
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Property'
 *     responses:
 *       200:
 *         description: Propiedad actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Property'
 *       400:
 *         description: Petición incorrecta, datos de la propiedad incompletos
 *       500:
 *         description: Error interno del servidor
 *   delete:
 *     summary: Elimina una propiedad por su id
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El id de la propiedad
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Propiedad eliminada correctamente
 *       404:
 *         description: Propiedad no encontrada
 *       500:
 *         description: Error interno del servidor
 */