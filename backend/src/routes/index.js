const { Router } = require("express");
const categories = require("./categories/post/categories");
const products = require("./products/products");
const suppliers = require("./suppliers/post/suppliers");

const router = Router();

router.use("/products", products);
router.use("/suppliers", suppliers);
router.use("/categories", categories);

module.exports = router;
