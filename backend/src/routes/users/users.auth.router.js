const { Router } = require("express");
const passport = require("passport");
const userService = require("./services/userService");
const { FAILURE_REDIRECT } = require("../../constants/config");
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
        message: { text: "You are logged in via GitHub now!!", type: "success" },
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
        text: "Login via GItHub fail!!",
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
  }),
  async (req, res, next) => {
    try {
      if (user) {
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
          message: { text: "You are logged in now!!", type: "success" },
        });
      } else {
        return res.json({
          message: {
            text: "The given email address or the username exist already!",
            type: "danger",
          },
        });
      }
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = usersAuth;
