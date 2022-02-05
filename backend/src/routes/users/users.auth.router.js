const { Router } = require("express");
const passport = require("passport");
const { FAILURE_REDIRECT, JWTSECRET } = require("../../constants/config");
const jwt = require("jsonwebtoken");
const State = {
  COMPLETE: "COMPLETE",
  FINISH: "FINISH",
  FAILURE: "FAILURE",
};

const usersAuth = Router();

/** POST route to initiate GitHub authentication flow */

usersAuth.post(
  "/",
  passport.authenticate("github", {
    failureRedirect: `${FAILURE_REDIRECT}/auth/github/complete`,
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
        state: State.FINISH,
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

usersAuth.get("/complete", (req, res, next) => {
  try {
    return res.json({
      state: State.COMPLETE,
      message: {
        text: "Almost there!!",
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
    failureRedirect: `${FAILURE_REDIRECT}/auth/github/failure`,
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
        state: State.FINISH,
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

usersAuth.get("/failure", (req, res, next) => {
  try {
    return res.json({
      state: State.FAILURE,
      message: {
        text: "Login via GitHub failed",
        type: "danger",
      },
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = usersAuth;
