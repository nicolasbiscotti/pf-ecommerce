const { Router } = require("express");
const getProduct = require("./controllerGet/getProduct.controller");
const productById = require("./controllerGet/productById.controller");
const createProduct = require("./controllerPost/createProduct.controller");

const products = Router();

products.route("/id/:id").get(productById);
products.route("/").get(getProduct);
products.route("/").post(createProduct);

module.exports = products;
