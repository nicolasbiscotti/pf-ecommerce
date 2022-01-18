const { Router } = require("express");
const getProdcut = require("./get/getProdcut");
const createProduct = require("./post/createProduct");
const productById = require("./get/productById");

const products = Router();

products.post("/", createProduct);
products.get("/", getProdcut);
products.use("/id", productById);

module.exports = products;
