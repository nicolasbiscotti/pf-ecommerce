const { Router } = require("express");
const sendMail = require("./controllerPost/sendMail.controller");

const mail = Router();

mail.route("/").post(sendMail);

module.exports = mail;
