const { Router } = require("express");
const passport = require("passport");
const { FAILURE_REDIRECT, JWTSECRET } = require("../../constants/config");
const jwt = require("jsonwebtoken");

const usersAuth = Router();

/** GET route to initiate GitHub authentication flow */

usersAuth.get(
  "/",
  passport.authenticate("github", {
    failureRedirect: FAILURE_REDIRECT,
  }),
  async (req, res, next) => {
    try {
      // create the token
      const token = jwt.sign(
        {
          userId: req.user.id,
        },
        JWTSECRET,
        { expiresIn: "24h" }
      );
      return res.json({
        jwt: token,
        message: {
          text: "You are logged in via GitHub now!!",
          type: "success",
        },
      });
    } catch (error) {
      return next(error);
    }
  }
);

usersAuth.get("/complete", (req, res, next) => {
  try {
    return res.json({
      message: {
        text: "Login fail /complite!!",
        type: "success",
      },
    });
  } catch (error) {
    return next(error);
  }
});

usersAuth.post(
  "/ssoRegister",
  passport.authenticate("github", {
    failureRedirect: FAILURE_REDIRECT,
    session: false,
  }),
  async (req, res, next) => {
    try {
      // create the token
      const token = jwt.sign(
        {
          userId: req.user.id,
        },
        JWTSECRET,
        { expiresIn: "24h" }
      );
      return res.json({
        jwt: token,
        message: {
          text: "You are logged in via GitHub now!!",
          type: "success",
        },
      });
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = usersAuth;
