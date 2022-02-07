const { User, OauthProfile } = require("../../../db");

const listUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: { model: OauthProfile, througth: { attributes: [] } },
    });
    if (users.length) {
      const usersPasswords = users.map((user) => ({
        ...user.dataValues,
      }));
      res.json(usersPasswords);
    } else {
      res.json({ msg: "Some went wrong." });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = listUsers;
