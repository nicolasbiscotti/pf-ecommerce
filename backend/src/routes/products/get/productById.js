// const { Router } = require("express");
const { Product, Category, Image } = require("../../../db");
// const productById = Router();

const productById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findByPk(id, {
      attributes: { exclude: ["purchasePrice", "createdAt", "updatedAt"] },
      include: [
        {
          model: Category,
          as: "categories",
          through: { attributes: [] },
        },
        {
          model: Image,
          as: "images",
          through: { attributes: [] },
        },
      ],
    });
    if (product) {
      res.json(product);
    } else {
      res.json({ msg: "Product not found." });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = productById;
