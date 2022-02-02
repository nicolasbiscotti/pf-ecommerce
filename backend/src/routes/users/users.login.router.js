const { Router } = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { JWTSECRET, FAILURE_REDIRECT } = require("../../constants/config");

const usersLogin = Router();

usersLogin.post(
  "/",
  passport.authenticate("local", {
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
        message: { text: "You are logged in now!!", type: "success" },
      });
    } catch (err) {
      return next(err);
    }
  }
);

usersLogin.get(
  "/whoami",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    return res.json({ username: req.user.username, email: req.user.email });
  }
);

usersLogin.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const username = req.user.username;
    req.logOut();
    return res.json({ logout: true, username });
  }
);

module.exports = usersLogin;
