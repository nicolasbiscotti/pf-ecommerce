const { User } = require("../../../db");

const userById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findByPk(id);
    if (!user || !user.isActive) {
      res.json({ msg: "No user found." });
    } else {
      res.json({ ...user.toJSON() });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = userById;
