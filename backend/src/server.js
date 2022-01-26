const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
// We are using cookie based sessions
// http://expressjs.com/en/resources/middleware/cookie-session.html
const session = require("cookie-session");

const routes = require("./routes/index.js");

// require the module to set up passport
const setupPassport = require("./services/passport");

require("./db.js");

const server = express();
// passport set up.
const passport = setupPassport({ JWTSECRET: process.env.JWTSECRET });

server.name = "API";

server.use(cors());

// Initialize session management with cookie-session
server.use(
  session({
    name: "session",
    keys: [
      "a set",
      "of keys",
      "used",
      "to encrypt",
      "the session",
      "change in",
      "production",
    ],
    resave: false,
    saveUninitialized: true,
    sameSite: "strict",
    maxAge: null,
  })
);

server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
// middlewares thats initialize passport and set req.session and req.user
server.use(passport.initialize());
server.use(passport.session());

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
