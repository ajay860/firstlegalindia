const express = require("express");
const router = express.Router();

const {
  createService,
  getAllServices,
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
 */

/**
 * @swagger
 * /services:
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
 * /services:
 *   get:
 *     summary: Get all services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: List of services
 *       500:
 *         description: Server error
 */
router.get("/", getAllServices);

module.exports = router;
