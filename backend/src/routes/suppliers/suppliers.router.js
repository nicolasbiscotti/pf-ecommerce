const { Router } = require("express");
const suppliers = Router();
const getSuppliers = require("./controllerGet/getSuppliers");
const createSuppliers = require("./controllerPost/createSupplier.controller");

suppliers.route("/").post(createSuppliers);
suppliers.route("/").get(getSuppliers);

module.exports = suppliers;
