const router = require("express").Router();
const {
  createCategory,
  getCategories
} = require("../controllers/category.controller");

router.post("/", createCategory);
router.get("/", getCategories);

module.exports = router;
