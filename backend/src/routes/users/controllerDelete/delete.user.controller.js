const { User } = require("../../../db");

const deleteUser = async (req, res, next) => {
  try {
    try {
      const user = await User.findByPk(req.query.id);
      if (!user) {
        res.json({ msg: "Not found user" });
      } else {
        user.isActive = false;
        await user.save();
        res.json({ msg: "User deleted successfully" });
      }
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = deleteUser;
