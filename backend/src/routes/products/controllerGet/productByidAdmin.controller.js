const { Product, Category, Supplier, Image } = require("../../../db");

const getProductByIdAdmin = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: { id },
      include: [
        {
          model: Category,
          as: "categories",
          through: { attributes: [] },
        },
        {
          model: Supplier,
          as: "suppliers",
          through: { attributes: [] },
        },
        {
          model: Image,
          as: "images",
          through: { attributes: [] },
        },
      ],
    });

    res.json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = getProductByIdAdmin;
