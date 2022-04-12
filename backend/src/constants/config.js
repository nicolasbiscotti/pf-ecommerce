require("dotenv").config();

module.exports = {
  SEQUELIZE_SYNC_FORCE: process.env.SEQUELIZE_SYNC_FORCE,

  URL_BASE_BACKEND: process.env.URL_BASE_BACKEND,

  JWTSECRET: process.env.JWTSECRET,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  REDIRECT_URI: process.env.REDIRECT_URI,
  FAILURE_REDIRECT: process.env.FAILURE_REDIRECT,

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_PATH: process.env.GOOGLE_PATH,
  GOOGLE_CALLBACK_URL: `${process.env.URL_BASE_BACKEND}${process.env.GOOGLE_PATH}/callback`,

  NODEMAILER_USER: process.env.NODEMAILER_USER,
  NODEMAILER_CLIENT_ID: process.env.NODEMAILER_CLIENT_ID,
  NODEMAILER_CLIENT_SECRET: process.env.NODEMAILER_CLIENT_SECRET,
  NODEMAILER_REFRESH_TOKEN: process.env.NODEMAILER_REFRESH_TOKEN,
  NODEMAILRE_REDIRECT_URI: process.env.NODEMAILRE_REDIRECT_URI,
};
