const { Router } = require("express");
const getProdcut = require("./controllerGet/getProduct.controller");
const productById = require("./controllerGet/productById.controller");
const createProduct = require("./controllerPost/createProduct.controller");

const products = Router();

products.route("/id/:id").get(productById);
products.route("/").get(getProdcut);
products.route("/").post(createProduct);

module.exports = products;
