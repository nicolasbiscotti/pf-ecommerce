const { Router } = require("express");
const orders = Router();


const createOrder = require("./controllerPost/createOrder.controller");

orders.route("/").post(createOrder);

module.exports = orders;