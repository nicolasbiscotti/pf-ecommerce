const { Router } = require("express");
const products = require("./products/products.router");
const suppliers = require("./suppliers/suppliers.router");
const categories = require("./categories/categories.roter");

const router = Router();

router.use("/products", products);
router.use("/suppliers", suppliers);
router.use("/categories", categories);

module.exports = router;
