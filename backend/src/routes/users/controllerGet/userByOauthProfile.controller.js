const userService = require("../services/userService");

const userByOauthProfile = async (req, res, next) => {
  try {
    const user = await userService.findUserByOauthProfile(req.query);
    if (user) {
      res.json({ user });
    } else {
      res.json({ message: "Some went wrong.", user });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = userByOauthProfile;
