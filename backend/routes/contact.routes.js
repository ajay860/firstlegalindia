const express = require('express');
const router = express.Router();
const {
  createContact,
  getAllContacts,
} = require('../controllers/contact.controller');

/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: Contact Us API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - user_name
 *       properties:
 *         user_name:
 *           type: string
 *           example: John Doe
 *         phone_number:
 *           type: string
 *           example: "9876543210"
 *         service_chosen:
 *           type: string
 *           example: Web Development
 *         message:
 *           type: string
 *           example: I want more details about your service.
 */

/**
 * @swagger
 * /api/contact-us:
 *   post:
 *     summary: Create a contact request
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: Contact created successfully
 *       500:
 *         description: Server error
 */
router.post('/', createContact);

/**
 * @swagger
 * /api/contact-us:
 *   get:
 *     summary: Get all contact requests
 *     tags: [Contact]
 *     responses:
 *       200:
 *         description: List of contacts
 *       500:
 *         description: Server error
 */
router.get('/', getAllContacts);

module.exports = router;
