const { Router } = require("express");
const suppliers = Router();
const createSuppliers = require("./controllerPost/createSupplier.controller");

suppliers.route("/").post(createSuppliers);

module.exports = suppliers;
