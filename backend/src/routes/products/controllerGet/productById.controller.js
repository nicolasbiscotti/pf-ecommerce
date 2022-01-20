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
      const images = product.images.map((image) => image.url);
      if (images.indexOf(product.mainImg) < 0) {
        images.unshift(product.mainImg);
      }
      res.json({ ...product.toJSON(), images });
    } else {
      res.json({ msg: "Product not found." });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = productById;
