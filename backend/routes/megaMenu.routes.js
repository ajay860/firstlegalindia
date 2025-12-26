const express = require("express");
const router = express.Router();
const megaMenuController = require("../controllers/megaMenu.controller");

/**
 * @swagger
 * /api/mega-menus:
 *   post:
 *     summary: Create Mega Menu
 *     tags: [Mega Menus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - menu_key
 *               - title
 *               - data
 *             properties:
 *               menu_key:
 *                 type: string
 *                 example: business-registration
 *               title:
 *                 type: string
 *                 example: Business Registration
 *               data:
 *                 type: object
 *                 example:
 *                   sections:
 *                     - heading: Company Registration
 *                       items:
 *                         - label: Private Limited
 *                           link: /services/business-registration/private-limited
 *     responses:
 *       201:
 *         description: Mega menu created successfully
 *       409:
 *         description: Menu key already exists
 */

router.post("/", megaMenuController.createMegaMenu);

/**
 * @swagger
 * /api/mega-menus:
 *   get:
 *     summary: Get all Mega Menus (Admin)
 *     tags: [Mega Menus]
 *     responses:
 *       200:
 *         description: List of mega menus
 */

router.get("/", megaMenuController.getAllMegaMenus);

/**
 * @swagger
 * /api/mega-menus/{menu_key}:
 *   get:
 *     summary: Get Mega Menu by key
 *     tags: [Mega Menus]
 *     parameters:
 *       - in: path
 *         name: menu_key
 *         required: true
 *         schema:
 *           type: string
 *         example: business-registration
 *     responses:
 *       200:
 *         description: Mega menu found
 *       404:
 *         description: Menu not found
 */
router.get("/:menu_key", megaMenuController.getMegaMenuByKey);

/**
 * @swagger
 * /api/mega-menus/{menu_key}:
 *   put:
 *     summary: Update Mega Menu
 *     tags: [Mega Menus]
 *     parameters:
 *       - in: path
 *         name: menu_key
 *         required: true
 *         schema:
 *           type: string
 *         example: business-registration
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Business Registration
 *               data:
 *                 type: object
 *                 example:
 *                   sections:
 *                     - heading: Company Registration
 *                       items:
 *                         - label: OPC Registration
 *                           link: /services/business-registration/opc
 *     responses:
 *       200:
 *         description: Mega menu updated successfully
 *       404:
 *         description: Menu not found
 */
router.put("/:menu_key", megaMenuController.updateMegaMenu);

/**
 * @swagger
 * /api/mega-menus/{menu_key}:
 *   delete:
 *     summary: Soft delete Mega Menu
 *     tags: [Mega Menus]
 *     parameters:
 *       - in: path
 *         name: menu_key
 *         required: true
 *         schema:
 *           type: string
 *         example: business-registration
 *     responses:
 *       200:
 *         description: Menu deleted successfully
 *       404:
 *         description: Menu not found
 */
router.delete("/:menu_key", megaMenuController.deleteMegaMenu);


module.exports = router;
