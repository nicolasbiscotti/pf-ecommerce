const { Category } = require("../../../db");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.json(categories ? categories : { msg: "Not found categories" });
  } catch (error) {
    next(error);
  }
};

module.exports = getCategories;
