const passport = require("passport");
const passportJWT = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
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
          // if (user && !user.verified) {
          //   return done(null, false);
          // }
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
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), // extract the bearer tocken send by the fronend app
        secretOrKey: config.JWTSECRET,
      },
      async (jwtPayload, done) => {
        try {
          const user = await User.findByPk(jwtPayload.userId);
          return done(null, user);
        } catch (error) {
          return done(null, false);
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
          } else if (req.body.username) {
            const [user, created] = await userService.createSocialUser(
              req.body.username,
              req.body.email,
              { profileId: profile.id, provider: profile.provider }
            );
            return done(null, user);
          }
          req.session.accessToken = accessToken;
          console.log(`req.session: ${JSON.stringify(req.session)}`);
          return done(null, false);
        } catch (error) {
          return done(error);
        }
      }
    )
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
