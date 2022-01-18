const { Router } = require("express");
const getProdcut = require("./get/getProdcut");
const createProduct = require("./post/createProduct");
const productById = require("./get/productById");

const products = Router();

products.post("/", createProduct);
products.route("/id/:id").get(productById);
products.get("/", getProdcut);

module.exports = products;
