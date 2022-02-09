const { User, OauthProfile } = require("../../../db");
const { where } = require("../utils/where");

const listUsers = async (req, res, next) => {
  try {
    const { isActive } = req.body;
    const users = await User.findAll({
      attributes: ["id", "username", "email", "isActive", "type"],
      where: where({ isActive }),
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
