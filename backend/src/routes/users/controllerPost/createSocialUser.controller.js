const userService = require("../services/userService");

const createSocialUser = async (req, res, next) => {
  try {
    const { username, email, oauthProfile } = req.body;
    const [socialProfile, created] = await userService.createSocialUser(
      username,
      email,
      oauthProfile
    );
    if (created) {
      res.json({
        socialProfile,
        successfully: true,
        message: {
          text: `Your account was created and liked with GitHub!`,
          type: "success",
        },
      });
    } else {
      res.json({
        socialProfile,
        successfully: false,
        message: {
          text: "The given social profile exist already!",
          type: "danger",
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createSocialUser;
