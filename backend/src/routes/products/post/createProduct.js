const { Router } = require("express");
const createProduct = Router();

const { Product, Supplier, Image, Category } = require("../../../db");
const { isCategories } = require("../../../services/isCategory");
const { createImages } = require("./services/createImages");
const { createSuppliers } = require("./services/createSuppliers");

module.exports = createProduct;

createProduct.post("/", async (req, res, next) => {
  try {
    const {
      name,
      description,
      purchasePrice,
      salePrice,
      mainImg,
      stock,
      discount,
      imgs,
      suppliers,
      categories,
    } = req.body;
    const isCategory = await isCategories(Category, categories);
    if (!isCategory) {
      return res.json({ msg: "One of the categories does not exist" });
    }
    const [product, created] = await Product.findOrCreate({
      where: { name },
      defaults: {
        description,
        purchasePrice,
        salePrice,
        mainImg,
        stock,
        discount,
      },
    });
    if (created) {
      const intancesImage = await createImages(Image, imgs);
      const intancesSupplier = await createSuppliers(Supplier, suppliers);
      await product.setImages(intancesImage);
      await product.setSuppliers(intancesSupplier);
      await product.setCategories(categories);
      res.json({ msg: "Product created successfully" });
    } else {
      res.json({ msg: "Product already exists" });
    }
  } catch (error) {
    next(error);
  }
});
