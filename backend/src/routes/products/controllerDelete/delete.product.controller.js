const { Product } = require("../../../db");

const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.query.id);
    if (!product) {
      res.json({ msg: "Not found products" });
    } else {
      product.isActive = false;
      await product.save();
      res.json({ msg: "Product deleted successfully" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = deleteProduct;
