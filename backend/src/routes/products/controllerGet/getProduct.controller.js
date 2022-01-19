const { PRODUCT_PER_PAGE } = require("../../../constants/product");
const { Product, Op } = require("../../../db");
const { propsFindAndCountAll } = require("./services/basicPropsFind");
const { cleanProduct } = require("./services/cleanProduct");
const { includeCategory } = require("./services/includeCategory");

const getProduct = async (req, res, next) => {
  try {
    const { name, idCategory, page = 0, typeOrder } = req.query;
    const propsFind = propsFindAndCountAll(page, typeOrder); //me trae las props basicas para le find
    const include = includeCategory(idCategory);
    const { count, rows } = await Product.findAndCountAll({
      where: name ? { name: { [Op.iLike]: `%${name}%` } } : {},
      include,
      ...propsFind,
    });
    const data = {
      page: parseInt(page),
      productsByPage: PRODUCT_PER_PAGE,
      pageCount: Math.ceil(count / PRODUCT_PER_PAGE),
      productCount: count,
      products: cleanProduct(rows),
    };
    res.json(rows.length ? data : { msg: "Not found products" });
  } catch (error) {
    next(error);
  }
};

module.exports = getProduct;
