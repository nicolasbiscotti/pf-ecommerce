const { PRODUCT_PER_PAGE } = require("../../../constants/product");
const { Product, Op } = require("../../../db");
const { propsFindAndCountAll } = require("./services/basicPropsFind");
const { includeCategory } = require("./services/includeCategory");
const where = require("./services/where");

const getProduct = async (req, res, next) => {
  try {
    const { name, idCategory, page = 0, typeOrder, max, min } = req.query;
    const propsFind = propsFindAndCountAll(page, typeOrder); //me trae las props basicas para le find
    const include = includeCategory(idCategory);
    const { count, rows } = await Product.findAndCountAll({
      where: where({ name, min, max, Op }),
      include,
      ...propsFind,
    });
    const data = {
      page: parseInt(page),
      productsByPage: PRODUCT_PER_PAGE,
      pageCount: Math.ceil(count / PRODUCT_PER_PAGE),
      productCount: count,
      products: rows,
    };
    res.json(rows.length ? data : { msg: "Not found products" });
  } catch (error) {
    next(error);
  }
};

module.exports = getProduct;
