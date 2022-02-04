const { Router } = require("express");
const getOrder = require("./controllerGet/getOrder.controller");
const getOrders = require("./controllerGetAll/getOrders.controller");
const createOrder = require("./controllerPost/createOrder.controller");
const updateStatusOrder = require("./controllerUpdateStatus/updateStatusOrder.controller");
const orders = Router();

orders.route("/").post(createOrder);
orders.route("/").get(getOrders)
orders.route("/:id").get(getOrder);
orders.route("/:id").put(updateStatusOrder);

module.exports = orders;