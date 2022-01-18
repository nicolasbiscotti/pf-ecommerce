const { Router } = require("express");
const getProdcut = require("./get/getProdcut");
const createProduct = require("./post/createProduct");

const products = Router();

products.post("/", createProduct);
products.get("/", getProdcut);

module.exports = products;
