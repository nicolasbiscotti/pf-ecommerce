const userService = require("../services/userService");

const userByOauthProfile = async (req, res, next) => {
  try {
    const user = await userService.findUserByOauthProfile(
      req.query.profileId,
      req.query.provider
    );
    if (user) {
      res.json({ ...user.dataValues });
    } else {
      res.json({ msg: "Some went wrong." });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = userByOauthProfile;
