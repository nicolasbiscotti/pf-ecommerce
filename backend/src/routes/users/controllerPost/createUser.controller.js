const { User } = require("../../../db");

const createUser = async (req, res, next) => {
  try {
    const { username, password, firstName, lastName, email, type } = req.body;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { username, password, firstName, lastName, type },
    });
    if (created) {
      res.json({
        successfully: true,
        message: { text: "User created successfully", type: "success" },
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
