const nodemailer = require("nodemailer");
const { GMAIL_EDAR_KEY } = require("../constants/config");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "testedarcode@gmail.com", // generated ethereal user
    pass: GMAIL_EDAR_KEY, // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log("Ready for send emails");
});

module.exports = transporter;
