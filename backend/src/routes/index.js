const { Router } = require("express");
const { GOOGLE_PATH } = require("../constants/config");
const products = require("./products/products.router");
const suppliers = require("./suppliers/suppliers.router");
const categories = require("./categories/categories.roter");
const users = require("./users/users.router");
const usersLogin = require("./users/users.login.router");
const usersAuth = require("./users/users.auth.router");
const usersAuthGoogle = require("./users/users.auth.google.router");
const mail = require("./mails/mail.router");
const orders = require("./orders/orders.router");
const ordersUser = require("./orderUser/orderUser.router");

const router = Router();

router.use("/products", products);
router.use("/suppliers", suppliers);
router.use("/categories", categories);
router.use("/users", users);
router.use("/users/login", usersLogin);
router.use("/users/auth/github", usersAuth);
router.use(GOOGLE_PATH, usersAuthGoogle);
router.use("/sendmail", mail);
router.use("/orders", orders);
router.use("/user/orders", ordersUser)

module.exports = router;
