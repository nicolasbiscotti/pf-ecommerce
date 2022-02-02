require("dotenv").config();

module.exports = {
  JWTSECRET: process.env.JWTSECRET,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  REDIRECT_URI: process.env.REDIRECT_URI,
  FAILURE_REDIRECT: process.env.FAILURE_REDIRECT,
};
