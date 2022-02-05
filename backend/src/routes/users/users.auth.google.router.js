const { Router } = require("express");
const { JWTSECRET } = require("../../constants/config");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const State = {
  COMPLETE: "COMPLETE",
  FINISH: "FINISH",
  FAILURE: "FAILURE",
};

const usersAuthGoogle = Router();

usersAuthGoogle.post(
  "/",
  passport.authenticate("google-local"),
  async (req, res, next) => {
    try {
      // create the token
      console.log(`req.user: ${req.user}`);

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

module.exports = usersAuthGoogle;
