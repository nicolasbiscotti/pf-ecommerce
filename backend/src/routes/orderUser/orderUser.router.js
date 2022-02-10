const { Router } = require("express");
const getOrdersUser = require("./getOrdersUser.controller");
const getOrderUser = require("./getOrderUser.controller");
const passport = require("passport");

const ordersUser = Router();


ordersUser.route("/").get(passport.authenticate("jwt"), getOrdersUser);
ordersUser.route("/:id").get(passport.authenticate("jwt"), getOrderUser);

module.exports = ordersUser;