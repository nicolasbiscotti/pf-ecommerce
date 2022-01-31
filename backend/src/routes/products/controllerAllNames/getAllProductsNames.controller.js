const { Product } = require("../../../db");

const getAllNames = async (req, res, next) => {
  try {
    const names = await Product.findAll({
      attributes: ["name"],
    });
    const data = { productsNames: names };
    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllNames;
