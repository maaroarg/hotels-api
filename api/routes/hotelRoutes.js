'use strict';



module.exports = function(app) {
  const hotelController = require('../controllers/hotelController');

/**
  * @swagger
  * definition:
  *   Hotel:
  *     properties:
  *       name:
  *         type: string
  *       stars:
  *         type: integer
  *       price:
  *         type: integer
  */

/**
 * @swagger
 * /api/hotels:
 *   get:
 *     tags:
 *       - Hotel
 *     description: Returns all hotels
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of hotels
 *         schema:
 *           $ref: '#/definitions/Hotel'
 */
  app.route('/api/hotels').get(hotelController.listHotels);

  /**
   * @swagger
   * /api/hotels:
   *   post:
   *     tags:
   *       - Hotel
   *     description: Creates a new hotel
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: hotel
   *         description: Hotel object
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Hotel'
   *     responses:
   *       200:
   *         description: Successfully created
   */
  app.route('/api/hotels').post(hotelController.createHotel);

  /**
   * @swagger
   * /api/hotels/{id}:
   *   get:
   *     tags:
   *       - Hotel
   *     description: Returns a single hotel
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: hotel's id
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: A single hotel
   *         schema:
   *           $ref: '#/definitions/Hotel'
   */
  app.route('/api/hotels/:id').get(hotelController.getHotel);

  /**
   * @swagger
   * /api/hotels/{id}:
   *   put:
   *     tags:
   *       - Hotel
   *     description: Deletes a single hotel
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: hotel's id
   *         in: path
   *         required: true
   *         type: integer
   *       - name: hotel
   *         description: Hotel object
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Hotel'
   *     responses:
   *       200:
   *         description: Successfully updated
   */
  app.route('/api/hotels/:id').put(hotelController.updateHotel);

  /**
   * @swagger
   * /api/hotels/{id}:
   *   delete:
   *     tags:
   *       - Hotel
   *     description: Deletes a single hotel
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Hotel's id
   *         in: path
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: Successfully deleted
   */
   app.route('/api/hotels/:id').delete(hotelController.removeHotel);

};
