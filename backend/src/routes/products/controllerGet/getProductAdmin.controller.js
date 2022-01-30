const { PRODUCT_PER_PAGE_ADMIN } = require("../../../constants/product");
const { Product, Op } = require("../../../db");

const getProductAdmin = async (req, res, next) => {
  try {
    const { name, page = 0 } = req.query;
    const { count, rows } = await Product.findAndCountAll({
      where: name ? { name: { [Op.iLike]: `%${name}%` } } : {},
      attributes: ["id", "name", "salePrice", "stock", "discount"],
      offset: page * PRODUCT_PER_PAGE_ADMIN,
      limit: PRODUCT_PER_PAGE_ADMIN,
      distinct: true,
    });
    const data = {
      page: parseInt(page),
      productsByPage: PRODUCT_PER_PAGE_ADMIN,
      pageCount: Math.ceil(count / PRODUCT_PER_PAGE_ADMIN),
      productCount: count,
      products: rows,
    };
    res.json(rows.length ? data : { msg: "Not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = getProductAdmin;
