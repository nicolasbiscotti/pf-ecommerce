const { User } = require("../../../db");

const createUser = async (req, res, next) => {
  try {
    const { username, password, firstName, lastName, email, type } = req.body;
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { username, password, firstName, lastName, type },
    });
    if (created) {
      res.json({ user, message: "User created successfully" });
    } else {
      res.json({ message: "Something went wrog" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;
