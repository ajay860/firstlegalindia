const express = require("express");
const router = express.Router();

const {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  getHomeServices,
  getServiceBySlug
} = require("../controllers/service.controller");

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: Services API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         title:
 *           type: string
 *           example: Company Registration
 *         description:
 *           type: string
 *           example: Complete company registration services in India.
 *         bgImage:
 *           type: string
 *           example: /images/services/company.jpg
 *         link:
 *           type: string
 *           example: /services/company-registration
 *         category_id:
 *           type: integer
 *           example: 1
 *         sub_category_id:
 *           type: integer
 *           example: 3
 *         display_to_home:
 *           type: boolean
 *           example: true
 *         article_content:
 *           type: string
 *           example: "<p>This is a detailed article content for the service.</p>"
 */

/**
 * @swagger
 * /api/services:
 *   post:
 *     summary: Create a service
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       201:
 *         description: Service created successfully
 *       500:
 *         description: Server error
 */
router.post("/", createService);


/**
 * @swagger
 * /api/services/home:
 *   get:
 *     summary: Get services displayed on home page
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: Home page services
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 count:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       bgImage:
 *                         type: string
 *                       link:
 *                         type: string
 *                       article_content:
 *                         type: string
 *                         example: "<p>Sample article content</p>"
 *       500:
 *         description: Server error
 */
router.get("/home", getHomeServices);


/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Get all services
 *     tags: [Services]
 *     parameters:
 *       - in: query
 *         name: display_to_home
 *         schema:
 *           type: boolean
 *         description: Filter services shown on home page
 *     responses:
 *       200:
 *         description: List of services
 *       500:
 *         description: Server error
 */
router.get("/", getAllServices);

/**
 * @swagger
 * /api/services/slug/{slug}:
 *   get:
 *     summary: Get a service by slug
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Slug of the service
 *     responses:
 *       200:
 *         description: Service found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Service'
 *       404:
 *         description: Service not found
 *       500:
 *         description: Server error
 */
router.get("/slug/:slug", getServiceBySlug);

/**
 * @swagger
 * /api/services/{id}:
 *   get:
 *     summary: Get a service by ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Service found
 *       404:
 *         description: Service not found
 */
router.get("/:id", getServiceById);

/**
 * @swagger
 * /api/services/{id}:
 *   put:
 *     summary: Update a service
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: Service updated successfully
 *       404:
 *         description: Service not found
 */
router.put("/:id", updateService);

/**
 * @swagger
 * /api/services/{id}:
 *   delete:
 *     summary: Delete a service
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Service deleted successfully
 *       404:
 *         description: Service not found
 */
router.delete("/:id", deleteService);



module.exports = router;
