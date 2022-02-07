const userService = require("../services/userService");

const createSocialUser = async (req, res, next) => {
  try {
    const { username, email, oauthProfile } = req.body;
    const [socialUser, created] = await userService.createSocialUser(
      username,
      email,
      oauthProfile
    );
    if (created) {
      res.json({
        successfully: true,
        message: {
          text: `Your account was created and liked with GitHub!`,
          type: "success",
        },
        socialUser,
      });
    } else {
      res.json({
        successfully: false,
        message: {
          text: "The given social profile exist already!",
          type: "danger",
        },
        socialUser,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createSocialUser;
