const { Router } = require("express");
const products = require("./products/products.router");
const suppliers = require("./suppliers/suppliers.router");
const categories = require("./categories/categories.roter");
const stripeCO = require("./stripeCheckout/stripe");
const mpcheckout = require("./MP-checkout/mpcheckout");

const router = Router();

router.use("/products", products);
router.use("/suppliers", suppliers);
router.use("/categories", categories);
router.use("/create-checkout-session", stripeCO);
router.use("/mercadopago", mpcheckout);

module.exports = router;
