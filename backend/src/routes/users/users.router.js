const { Router } = require("express");
const passport = require("passport");
const listUsers = require("./controllerGet/listUsers.controller");
const userById = require("./controllerGet/userById.controller");
const userByOauthProfile = require("./controllerGet/userByOauthProfile.controller");
const verification = require("./controllerGet/verification.controller");
const createSocialUser = require("./controllerPost/createSocialUser.controller");
const createUser = require("./controllerPost/createUser.controller");
const updateUserController = require("./controllerPut/updateUser.controller");
const userService = require("./services/userService");

const users = Router();

users
  .route("/id/:id")
  .get(passport.authenticate("jwt"), passport.authenticate("admin"), userById);
users
  .route("/update")
  .put(
    passport.authenticate("jwt"),
    passport.authenticate("admin"),
    updateUserController
  );
users.route("/social").post(passport.authenticate("jwt"), createSocialUser);
users.route("/social").get(passport.authenticate("admin"), userByOauthProfile);
users.route("/verify/:userId/:token").get(verification);
users
  .route("/")
  .get(passport.authenticate("jwt"), passport.authenticate("admin"), listUsers);
users.route("/").post(createUser);

module.exports = users;
