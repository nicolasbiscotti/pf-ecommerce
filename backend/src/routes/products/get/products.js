const { Router } = require("express");
const products = Router();
module.exports = products;

products.get("/", (req, res) => {
  res.json({ msg: "pf-ecommerce" });
});
