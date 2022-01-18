const { Router } = require("express");
const getProdcut = Router();
module.exports = getProdcut;

getProdcut.get("/", (req, res) => {
  res.json({ msg: "products" });
});
