const { Router } = require("express");
const getOrders = require("./controllerGet/getOrders.controller");
const createOrder = require("./controllerPost/createOrder.controller");
const orders = Router();

orders.route("/").post(createOrder);
orders.route("/").get(getOrders)

module.exports = orders;