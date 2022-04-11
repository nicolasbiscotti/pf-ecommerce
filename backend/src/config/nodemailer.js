const nodemailer = require("nodemailer");
const {
  NODEMAILER_USER,
  NODEMAILER_CLIENT_ID,
  NODEMAILER_REFRESH_TOKEN,
  NODEMAILRE_ACCES_TOKEN,
} = require("../constants/config");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: NODEMAILER_USER,
    clientId: NODEMAILER_CLIENT_ID,
    clientSecret: NODEMAILER_CLIENT_ID,
    refreshToken: NODEMAILER_REFRESH_TOKEN,
    accessToken: NODEMAILRE_ACCES_TOKEN,
  },
});

transporter.verify().then(() => {
  console.log("Ready for send emails");
});

module.exports = transporter;
