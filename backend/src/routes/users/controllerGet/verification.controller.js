const userService = require("../services/userService");

const verification = async (req, res, next) => {
  try {
    const user = await userService.find(req.params.userId);
    if (!user || req.params.token !== user.verificationToken || !user.isActive) {
      return res.json({
        message: {
          text: "Invalid credentials provided!",
          type: "danger",
        },
      });
    } else {
      user.verified = true;
      await user.save();
      return res.json({
        message: {
          text: "You have been verified!",
          type: "success",
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = verification;
