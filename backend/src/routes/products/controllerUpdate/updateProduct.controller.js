const { Product, Image } = require("../../../db");
const { createImages } = require("../controllerPost/services/createImages");
const { validateColumnUpdate } = require("./services");

const updateProduct = async (req, res) => {
  try {
    const {
      id,
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
    const product = await Product.findByPk(id);
    if (!product) {
      return res.json({ msg: "Not found" });
    }
    const columnToUpdate = validateColumnUpdate(product, {
      name,
      description,
      purchasePrice,
      salePrice,
      mainImg,
      stock,
      discount,
    });
    if (categories) await product.setCategories(categories);
    if (suppliers) await product.setSuppliers(suppliers);
    if (imgs) {
      const intancesImage = await createImages(Image, imgs);
      await product.setImages(intancesImage);
    }
    await product.update(columnToUpdate);
    res.json({ msg: "Updated successfully" });
  } catch (error) {
    return res.json({ msg: "Updated error" });
    //next(error);
  }
};

module.exports = updateProduct;
