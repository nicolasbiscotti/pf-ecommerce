const { Router } = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { JWTSECRET, FAILURE_REDIRECT } = require("../../constants/config");
const State = {
  COMPLETE: "COMPLETE",
  FINISH: "FINISH",
  FAILURE: "FAILURE",
};

const usersLogin = Router();

usersLogin.post(
  "/",
  passport.authenticate("local", {
    failureRedirect: `${FAILURE_REDIRECT}/login/failure`,
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
        message: { text: "You are logged in now!!", type: "success" },
      });
    } catch (err) {
      return next(err);
    }
  }
);

usersLogin.get("/failure", (req, res, next) => {
  try {
    return res.json({
      state: State.FAILURE,
      message: {
        text: "Invalid username or password",
        type: "danger",
      },
    });
  } catch (error) {
    return next(error);
  }
});

usersLogin.get(
  "/whoami",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    return res.json({
      username: req.user.username,
      email: req.user.email,
      userType: req.user.type,
    });
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

usersLogin.get(
  "/myid",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    return res.json({
      id: req.user.id,
      email: req.user.email,
    });
  }
);

module.exports = usersLogin;
