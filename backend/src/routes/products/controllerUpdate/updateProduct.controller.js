const { Product, Image } = require("../../../db");
const { createImages } = require("../controllerPost/services/createImages");

const updateProduct = async (req, res, next) => {
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
    const columnsUpdate = {};
    if (name && name !== product.name) {
      columnsUpdate.name = name;
    }
    if (description && description !== product.description) {
      columnsUpdate.description = description;
    }
    if (purchasePrice && purchasePrice !== product.purchasePrice) {
      columnsUpdate.purchasePrice = purchasePrice;
    }
    if (salePrice && salePrice !== product.salePrice) {
      columnsUpdate.salePrice = salePrice;
    }
    if (mainImg && mainImg !== product.mainImg) {
      columnsUpdate.mainImg = mainImg;
    }
    if (stock && stock !== product.stock) {
      columnsUpdate.stock = stock;
    }
    if (discount && discount !== product.discount) {
      columnsUpdate.discount = discount;
    }
    if (categories) await product.setCategories(categories);
    if (suppliers) await product.setSuppliers(suppliers);

    if (imgs) {
      const intancesImage = await createImages(Image, imgs);
      await product.setImages(intancesImage);
    }
    const updateProduct = await product.update(columnsUpdate);
    res.json(updateProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = updateProduct;
