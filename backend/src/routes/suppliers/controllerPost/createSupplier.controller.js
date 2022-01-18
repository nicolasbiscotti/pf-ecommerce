const { Supplier } = require("../../../db");

const createSuppliers = async (req, res, next) => {
  try {
    const { name, phone, email } = req.body;

    const [supplier, created] = await Supplier.findOrCreate({
      where: { email },
      defaults: { name, phone },
    });

    if (!created) {
      res.json({ msg: "Supplier already exists" });
    } else {
      res.json({ msg: "Supplier created successfully" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createSuppliers;
