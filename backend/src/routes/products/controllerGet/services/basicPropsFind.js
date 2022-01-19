const { PRODUCT_PER_PAGE } = require("../../../../constants/product");

module.exports = {
  propsFindAndCountAll: function (page, typeOrder) {
    const hashTypeOrder = {
      expensive: [["salePrice", "DESC"]],
      cheap: [["salePrice", "ASC"]],
    };
    return {
      attributes: ["id", "name", "salePrice", "mainImg", "discount"],
      offset: page * PRODUCT_PER_PAGE,
      limit: PRODUCT_PER_PAGE,
      order: hashTypeOrder[typeOrder] || [],
      distinct: true,
    };
  },
};
