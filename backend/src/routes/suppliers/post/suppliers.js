const { Router } = require("express");
const suppliers = Router();

const { Supplier } = require("../../../db");

module.exports = suppliers;

suppliers.post("/", async (req, res, next) => {
  try {
    const { name, phone, email } = req.body;

    const [supplier, created] = await Supplier.findOrCreate({
      where: {email},
      defaults: {name,phone},
    });

    if (!created) {
      res.json({ msg: "Supplier already exists" });
    } else {
      res.json({ msg: "Supplier created successfully" });
    }
  } catch (error) {
    next(error);
  }
});
