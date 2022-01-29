const { Router } = require("express");
const listUsers = require("./controllerGet/listUsers.controller");
const userById = require("./controllerGet/userById.controller");
const userByOauthProfile = require("./controllerGet/userByOauthProfile.controller");
const createSocialUser = require("./controllerPost/createSocialUser.controller");
const createUser = require("./controllerPost/createUser.controller");

const users = Router();

users.route("/id/:id").get(userById);
users.route("/").get(listUsers);
users.route("/social").post(createSocialUser);
users.route("/social").get(userByOauthProfile);
users.route("/").post(createUser);

module.exports = users;
