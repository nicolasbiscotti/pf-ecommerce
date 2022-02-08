const passport = require("passport");
const passportJWT = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const CustomStrategy = require("passport-custom").Strategy;
const { OAuth2Client } = require("google-auth-library");
/* eslint-disable no-unused-vars */
const { User } = require("../../db");
const userService = require("../../routes/users/services/userService");

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

/**
 * This module sets up and configures passport
 * @param {*} config
 */
module.exports = (config) => {
  passport.use(
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "username", // set the name that passport looks for the field in model User
        passwordField: "password",
      },
      async (req, username, password, done) => {
        try {
          const user = await User.findOne({
            where: { username: username },
          });
          if (!user) {
            req.session.messages.push({
              text: "Invalid username or password.",
              type: "danger",
            });
            return done(null, false);
          }
          if (user && !user.verified) {
            req.session.messages.push({
              text: "verify your email account.",
              type: "danger",
            });
            return done(null, false);
          }
          const isValid = await user.comparePassword(password);
          if (!isValid) {
            req.session.messages.push({
              text: "Invalid username or password.",
              type: "danger",
            });
            return done(null, false);
          }

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
  passport.use(
    "jwt",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), // extract the bearer tocken send by the fronend app
        secretOrKey: config.JWTSECRET,
      },
      async (jwtPayload, done) => {
        try {
          const user = await User.findByPk(jwtPayload.userId);
          if (user && !user.verified) {
            return done(null, false);
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    "admin",
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.JWTSECRET,
      },
      async (jwtPayload, done) => {
        try {
          const user = await User.findByPk(jwtPayload.userId);
          if (user && !user.verified && user.type !== "admin") {
            return done(null, false);
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    new GitHubStrategy(
      {
        clientID: config.GITHUB_CLIENT_ID,
        clientSecret: config.GITHUB_CLIENT_SECRET,
        scope: ["user:email"], // what we want to access from the github profile (only the email)
        callbackURL: config.REDIRECT_URI,
        passReqToCallback: true,
        usernameField: "username", // set the name that passport looks for the field in model User
      },
      async (req, accessToken, refreshToken, profile, done) => {
        try {
          const existingUser = await userService.findUserByOauthProfile({
            profileId: profile.id,
            provider: profile.provider,
          });
          if (existingUser) {
            return done(null, existingUser);
          } else {
            const [user, created] = await userService.createSocialUser(
              profile.username,
              profile.emails[0].value,
              { profileId: profile.id, provider: profile.provider }
            );
            return done(null, user);
          }
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    "google-local",
    new CustomStrategy(async (req, done) => {
      const client = new OAuth2Client(config.GOOGLE_CLIENT_ID);
      try {
        const { token } = req.body;
        const ticket = await client.verifyIdToken({
          idToken: token,
          audience: config.GOOGLE_CLIENT_ID,
        });
        const { name, email } = ticket.getPayload();
        const existingUser = await userService.findUserByOauthProfile({
          profileId: "12345",
          provider: "google",
        });
        if (existingUser) {
          return done(null, existingUser);
        } else {
          const [user, created] = await userService.createSocialUser(
            name,
            email,
            { profileId: email, provider: "google" }
          );
          return done(null, user);
        }
      } catch (error) {
        return done(error);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id); // serializatiion of the user
  });
  passport.deserializeUser(async (userId, done) => {
    try {
      const user = await User.findByPk(userId); // deserialization of the userId
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  });
  return passport;
};
