const userService = require("../services/userService");

const createUser = async (req, res, next) => {
  try {
    const [user, created] = await userService.createUser(req.body);
    if (created) {
      res.json({
        successfully: true,
        message: {
          text: `User ${user.username} created successfully`,
          type: "success",
        },
      });
    } else {
      res.json({
        successfully: false,
        message: {
          text: "The given email address or the username exist already!",
          type: "danger",
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;
