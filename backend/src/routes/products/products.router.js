const { Router } = require("express");
const getProduct = require("./controllerGet/getProduct.controller");
const getProductAdmin = require("./controllerGet/getProductAdmin.controller");
const productById = require("./controllerGet/productById.controller");
const getProductByIdAdmin = require("./controllerGet/productByidAdmin.controller");
const createProduct = require("./controllerPost/createProduct.controller");
const updateProduct = require("./controllerUpdate/updateProduct.controller");
const getAllNames = require("./controllerAllNames/getAllProductsNames.controller");
const deleteProduct = require("./controllerDelete/delete.product.controller");
const passport = require("passport");

const products = Router();

products
  .route("/admin/:id")
  .get(passport.authenticate("admin"), getProductByIdAdmin);
products.route("/admin").get(passport.authenticate("admin"), getProductAdmin);
products.route("/id/:id").get(productById);
products.route("/").get(getProduct);
products.route("/").post(passport.authenticate("admin"), createProduct);
products.route("/").put(passport.authenticate("admin"), updateProduct);
products.route("/delete").put(passport.authenticate("admin"), deleteProduct);
products.route("/allnames").get(getAllNames);

module.exports = products;
