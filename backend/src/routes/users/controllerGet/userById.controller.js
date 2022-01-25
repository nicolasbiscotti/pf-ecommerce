const { User } = require("../../../db");

const userById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.json({ ...user.dataValues });
    } else {
      res.json({ msg: "Some went wrong." });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = userById;
