const { Router } = require("express");
const getUserGeoLocation = require("./getUserGeoLocation.controller");

const userGeoLocation = Router();

userGeoLocation.route("/user").get(getUserGeoLocation);

module.exports = userGeoLocation;
