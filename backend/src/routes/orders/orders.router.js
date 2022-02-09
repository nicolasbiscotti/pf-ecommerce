const { Router } = require("express");
const getOrder = require("./controllerGet/getOrder.controller");
const getOrders = require("./controllerGet/getOrders.controller");
const createOrder = require("./controllerPost/createOrder.controller");
const updateStatusOrder = require("./controllerUpdateStatus/updateStatusOrder.controller");
const destroyOrder = require("./controllerDelete/destroyOrder.controller");
const passport = require("passport");
const getOrderUser = require("./controllerGet/getOrdersUser.controller");
const orders = Router();

orders.route("/").post(passport.authenticate("jwt"), createOrder);
orders.route("/").get(passport.authenticate("jwt"), getOrders);
orders.route("/:id").get(passport.authenticate("jwt"), getOrder);
orders.route("/:id").put(passport.authenticate("admin"), updateStatusOrder);
orders.route("/:id").delete(passport.authenticate("admin"), destroyOrder);
orders.route("/user").get(passport.authenticate("jwt"), getOrderUser);

module.exports = orders;
