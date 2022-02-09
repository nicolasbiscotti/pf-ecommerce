const userService = require("../services/userService");

const userByOauthProfile = async (req, res, next) => {
  try {
    const user = await userService.findUserByOauthProfile(req.query);
    if (!user || !user.isActive) {
      res.json({ msg: "No user found." });
    } else {
      res.json({ ...user.toJSON() });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = userByOauthProfile;
