const { Router } = require("express");
const getProduct = require("./controllerGet/getProduct.controller");
const productById = require("./controllerGet/productById.controller");
const createProduct = require("./controllerPost/createProduct.controller");
const getAllNames = require("./controllerAllNames/getAllProductsNames.controller");

const products = Router();

products.route("/id/:id").get(productById);
products.route("/").get(getProduct);
products.route("/").post(createProduct);
products.route("/allnames").get(getAllNames);

module.exports = products;
