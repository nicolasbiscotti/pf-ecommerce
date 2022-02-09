const { User, OauthProfile } = require("../../../db");

const listUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "email", "isActive", "type"],
      where: { isActive: true },
      include: { model: OauthProfile, througth: { attributes: [] } },
    });
    if (users.length) {
      res.json(users);
    } else {
      res.json({ msg: "Some went wrong." });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = listUsers;
