require("dotenv").config();

module.exports = {
  URL_BASE_BACKEND: process.env.URL_BASE_BACKEND,

  JWTSECRET: process.env.JWTSECRET,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  REDIRECT_URI: process.env.REDIRECT_URI,
  FAILURE_REDIRECT: process.env.FAILURE_REDIRECT,

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_PATH: process.env.GOOGLE_PATH,
  GOOGLE_CALLBACK_URL: `http://localhost:3001${process.env.GOOGLE_PATH}/callback`,

  GMAIL_EDAR_KEY: process.env.GMAIL_EDAR_KEY,
};
