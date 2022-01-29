const { Router } = require("express");
const products = require("./products/products.router");
const suppliers = require("./suppliers/suppliers.router");
const categories = require("./categories/categories.roter");
//const mpcheckout = require("./mp-checkout/mpcheckout.router");
const users = require("./users/users.router");
const usersLogin = require("./users/users.login.router");

const router = Router();

router.use("/products", products);
router.use("/suppliers", suppliers);
router.use("/categories", categories);
// router.use("/mercadopago", mpcheckout);
router.use("/users", users);
router.use("/users/login", usersLogin);

module.exports = router;
