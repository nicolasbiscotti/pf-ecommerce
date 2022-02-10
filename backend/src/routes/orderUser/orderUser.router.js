const { Router } = require("express");
const getOrderUser = require("./getOrdersUser.controller");
const passport = require("passport");

const ordersUser = Router();


ordersUser.route("/").get(passport.authenticate("jwt"), getOrderUser);

module.exports = ordersUser;