const { Router } = require("express");
const {
  sendMail,
  orderDispatch,
} = require("./controllerPost/sendMail.controller");

const mail = Router();

mail.route("/").post(sendMail);
mail.route("/dispatch").put(orderDispatch);

module.exports = mail;
