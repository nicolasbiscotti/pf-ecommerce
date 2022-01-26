const passport = require("passport");
const passportJWT = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
/* eslint-disable no-unused-vars */
const { User } = require("../../db");

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
        passwordField: "password", // line 13 and 14 shows the default values
      },
      async (req, username, password, done) => {
        try {
          const user = await User.findOne({
            where: { username: req.body.username },
          });
          if (!user) {
            return done(null, false);
          }
          // if (user && !user.verified) {
          //   return done(null, false);
          // }
          const isValid = await user.comparePassword(req.body.password);
          if (!isValid) {
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
