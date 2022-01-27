const { Router } = require("express");
const userById = require("./controllerGet/userById.controller");
const createUser = require("./controllerPost/createUser.controller");

const users = Router();

users.route("/id/:id").get(userById);
users.route("/").post(createUser);

module.exports = users;
