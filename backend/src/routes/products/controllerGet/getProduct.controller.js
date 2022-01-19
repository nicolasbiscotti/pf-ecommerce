const { PRODUCT_PER_PAGE } = require("../../../constants/product");
const { Product, Category } = require("../../../db");

const getProduct = async (req, res, next) => {
  try {
    const { idCategory, page = 0, typeOrder } = req.query;
    const hashTypeOrder = {
      expensive: [["salePrice", "DESC"]],
      cheap: [["salePrice", "ASC"]],
    };
    const basicPropsFind = {
      attributes: ["id", "name", "salePrice", "mainImg", "discount"],
      offset: page * PRODUCT_PER_PAGE,
      limit: PRODUCT_PER_PAGE,
      order: hashTypeOrder[typeOrder] || [],
    };
    const { count, rows } = await Product.findAndCountAll({
      include: [
        {
          model: Category,
          as: "categories",
          where: idCategory ? { id: idCategory } : {},
          through: { attributes: [] },
        },
      ],
      ...basicPropsFind,
      distinct: true,
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
