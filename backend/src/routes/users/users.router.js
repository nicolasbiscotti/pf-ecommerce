const { Router } = require("express");
const passport = require("passport");
const deleteUser = require("./controllerDelete/delete.user.controller");
const listUsers = require("./controllerGet/listUsers.controller");
const userById = require("./controllerGet/userById.controller");
const userByOauthProfile = require("./controllerGet/userByOauthProfile.controller");
const verification = require("./controllerGet/verification.controller");
const createSocialUser = require("./controllerPost/createSocialUser.controller");
const createUser = require("./controllerPost/createUser.controller");
const sendResetPassLink = require("./controllerPost/sendReset.password.controller");
const resetPassword = require("./controllerPut/reset.password.controller");
const updateUserController = require("./controllerPut/updateUser.controller");

const users = Router();

users.route("/resetpassword").put(resetPassword);
users.route("/sendResetPassword").post(sendResetPassLink);
users.route("/id/:id").get(passport.authenticate("admin"), userById);
users
  .route("/update")
  .put(passport.authenticate("admin"), updateUserController);
users.route("/social").post(passport.authenticate("admin"), createSocialUser);
users.route("/social").get(passport.authenticate("admin"), userByOauthProfile);
users.route("/verify/:userId/:token").get(verification);
users.route("/").get(passport.authenticate("admin"), listUsers);
users.route("/delete").put(passport.authenticate("admin"), deleteUser);
users.route("/").post(createUser);

module.exports = users;
