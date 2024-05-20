/**
 * @swagger
 * components:
 *  schemas:
 *    Property:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          format: uuid
 *          description: El id autogenerado de la propiedad
 *        name:
 *          type: string
 *          description: El nombre de la propiedad
 *        province:
 *          type: string
 *          description: La provincia donde se encuentra la propiedad
 *        canton:
 *          type: string
 *          description: El cantón donde se encuentra la propiedad
 *        district:
 *          type: string
 *          description: El distrito donde se encuentra la propiedad
 *        coordinates:
 *          type: object
 *          properties:
 *            type:
 *              type: string
 *              example: "Point"
 *            coordinates:
 *              type: array
 *              items:
 *                type: number
 *          description: Las coordenadas de la propiedad
 *        squareMeters:
 *          type: string
 *          description: Los metros cuadrados de la propiedad
 *        forRent:
 *          type: boolean
 *          description: Indica si la propiedad es para alquiler
 *        bedroomNum:
 *          type: integer
 *          description: El número de habitaciones de la propiedad
 *        bathroomNum:
 *          type: integer
 *          description: El número de baños de la propiedad
 *        garage:
 *          type: integer
 *          description: El número de garajes de la propiedad
 *        rentalPrice:
 *          type: number
 *          format: float
 *          description: El precio de alquiler de la propiedad
 *        salePrice:
 *          type: number
 *          format: float
 *          description: El precio de venta de la propiedad
 *        description:
 *          type: string
 *          description: Una descripción de la propiedad
 *        restrictions:
 *          type: string
 *          description: Las restricciones de la propiedad
 *        rating:
 *          type: number
 *          format: float
 *          description: La calificación de la propiedad
 *        photos:
 *          type: string
 *          description: Las fotos de la propiedad
 *      required:
 *        - id
 *        - name
 *        - province
 *        - canton
 *        - district
 *        - coordinates
 *        - squareMeters
 *        - forRent
 *        - bedroomNum
 *        - bathroomNum
 *        - garage
 *        - photos
 *      example:
 *        id: "1a2b3c4d"
 *        name: "Casa de Playa"
 *        province: "Guanacaste"
 *        canton: "Santa Cruz"
 *        district: "Tamarindo"
 *        coordinates: 
 *          type: "Point"
 *          coordinates: [-85.8, 10.3]
 *        squareMeters: "200"
 *        forRent: true
 *        bedroomNum: 3
 *        bathroomNum: 2
 *        garage: 1
 *        rentalPrice: 1500.00
 *        salePrice: 250000.00
 *        description: "Una hermosa casa de playa con vista al mar."
 *        restrictions: "No se permiten mascotas."
 *        rating: 4.5
 *        photos: "url_de_la_foto_1,url_de_la_foto_2"
 */