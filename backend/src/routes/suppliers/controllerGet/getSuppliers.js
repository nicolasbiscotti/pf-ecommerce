const { Supplier } = require("../../../db");

const getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await Supplier.findAll({ attributes: ["id", "name"] });
    res.json(suppliers ? suppliers : { msg: "Not found suppliers" });
  } catch (error) {
    next(error);
  }
};

module.exports = getSuppliers;
