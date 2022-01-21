const { Category } = require("../../../db");

const createCategories = async (req, res, next) => {
  try {
    const { name, img } = req.body;
    const [category, created] = await Category.findOrCreate({
      where: { name },
      defaults: { img },
    });
    if (!created) {
      res.json({ msg: "Category already exists", category });
    } else {
      res.json({ msg: "Category created successfully", category });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createCategories;
