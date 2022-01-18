const { Router } = require("express");
const categories = Router();
const { Category } = require("../../../db");
module.exports = categories;

categories.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    const [category, created] = await Category.findOrCreate({
      where: { name },
    });
    if (!created) {
      res.json({ msg: "Category already exists", category });
    } else {
      res.json({ msg: "Category created successfully", category });
    }
  } catch (error) {
    next(error);
  }
});
