const userService = require("../services/userService");

const updateUserController = async (req, res, next) => {
  try {
    const response = await userService.updateUser(req.body);
    res.json({ message: response, updatedBy: req.user.username });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUserController;
