const { Router } = require("express");
const { Product, Category, Image } = require("../../../db");
const productById = Router();

productById.get("/:id", async (req, res, next) => {
  const id = Number.parseInt(req.params.id, 10);
  try {
    const product = await Product.findByPk(id, {
      attributes: { exclude: ["purchasePrice", "createdAt", "updatedAt"] },
      include: [{ model: Category, as: "categories" }, { model: Image }],
    });
    res.json({ product });
  } catch (error) {
    next(error);
  }
});

module.exports = productById;
