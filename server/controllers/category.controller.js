const Category = require("../models/Category");
const slugify = require("slugify");

exports.createCategory = async (req, res) => {
  const { name, description } = req.body;
  const category = await Category.create({
    name,
    description,
    slug: slugify(name, { lower: true })
  });
  res.status(201).json(category);
};

exports.getCategories = async (req, res) => {
  const categories = await Category.find({ isActive: true });
  res.json(categories);
};
