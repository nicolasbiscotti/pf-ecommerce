const { Router } = require("express");
const { GOOGLE_CLIENT_ID, JWTSECRET } = require("../../constants/config");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const userService = require("./services/userService");

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const usersAuthGoogle = Router();

usersAuthGoogle.post("/", async (req, res, next) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });
    const { name, email, profile } = ticket.getPayload();

    const user = await userService.createSocialUser(name, email, {
      profileId: profile.id,
      provider: profile.provider,
    });

    return res.json({
      state: State.FINISH,
      user,
      message: { text: "You are logged in now!!", type: "success" },
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = usersAuthGoogle;
