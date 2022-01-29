const { Router } = require("express");
const passport = require("passport");
const userService = require("./services/userService");

const usersAuth = Router();

/** GET route to initiate GitHub authentication flow */
usersAuth.get("/", passport.authenticate("github"));

usersAuth.get(
  "/callback",
  passport.authenticate("github", {
    failureRedirect: "/users/auth/githab/complete",
  }),
  async (req, res, next) => {
    try {
      return res.json({
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

usersAuth.get("/complete", async (req, res, next) => {
  try {
    if (!req.session.tempOAuthProfile) {
      return res.json({
        message: {
          text: "Login in via GitHub failed!!",
          type: "danger",
        },
      });
    }
    if (req.user) {
      const user = await userService.find(req.user.id);
      userService.pushOauthProfile(user, req.session.tempOAuthProfile);
      return res.json({
        message: {
          text: "Your GitHub profile was successfully linked!!",
          type: "success",
        },
      });
    }
    return res.json({
      message: {
        text: "Try login again!!",
        type: "fail",
      },
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = usersAuth;
