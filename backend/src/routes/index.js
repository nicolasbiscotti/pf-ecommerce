const { Router } = require("express");
const products = require("./products/get/products");
const suppliers = require("./suppliers/post/suppliers");
module.exports = router;

const router = Router();

router.use("/products", products);
router.use("/suppliers", suppliers);
