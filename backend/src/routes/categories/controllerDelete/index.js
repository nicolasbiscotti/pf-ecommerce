const { Category } = require("../../../db");

const deleteCategories = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) {
      res.json({ msg: "Category not found" });
    } else {
      const deleted = await category.destroy();
      if (deleted) {
        res.json({ msg: "Category deleted successfully" });
      } else {
        res.json({ msg: "Category not deleted" });
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = deleteCategories;
