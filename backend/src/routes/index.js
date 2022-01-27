const { Router } = require("express");
const products = require("./products/products.router");
const suppliers = require("./suppliers/suppliers.router");
const categories = require("./categories/categories.roter");
const mpcheckout = require("./mp-checkout/mpcheckout");

const router = Router();

router.use("/products", products);
router.use("/suppliers", suppliers);
router.use("/categories", categories);
router.use("/mercadopago", mpcheckout);

module.exports = router;
