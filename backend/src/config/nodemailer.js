const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const {
  NODEMAILER_USER,
  NODEMAILER_CLIENT_ID,
  NODEMAILER_REFRESH_TOKEN,
  NODEMAILRE_REDIRECT_URI,
  NODEMAILER_CLIENT_SECRET,
} = require("../constants/config");

const oAuth2Client = new google.auth.OAuth2(
  NODEMAILER_CLIENT_ID,
  NODEMAILER_CLIENT_SECRET,
  NODEMAILRE_REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: NODEMAILER_REFRESH_TOKEN });

async function sendEMail({ from, to, subject, text }) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: NODEMAILER_USER,
        clientId: NODEMAILER_CLIENT_ID,
        clientSecret: NODEMAILER_CLIENT_ID,
        refreshToken: NODEMAILER_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    transporter.verify().then(() => {
      console.log("Ready for send emails");
    });

    transporter.sendMail({
      from,
      to,
      subject,
      text,
      //html: "<b>Hello world?</b>", // html body
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = sendEMail;
