const { Router } = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const usersAuth = Router();

/** GET route to initiate GitHub authentication flow */
usersAuth.get("/", passport.authenticate("github"), async (req, res, next) => {
  try {
    return next({ message: "Not implementes" });
  } catch (err) {
    return next(err);
  }
});

usersAuth.get(
  "/callback",
  passport.authenticate("github"),
  async (req, res, next) => {
    try {
      return next({ message: "Not implementes" });
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = usersAuth;
