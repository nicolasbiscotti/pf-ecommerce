const userService = require("../services/userService");
const State = {
  COMPLETE: "COMPLETE",
  FINISH: "FINISH",
  FAILURE: "FAILURE",
};

const resetPassword = async (req, res, next) => {
  try {
    const { id, token, password, confirmpassword } = req.body;
    const user = await userService.find(id); // find only fetch actives users.
    if (
      !user ||
      token !== user.verificationToken ||
      password !== confirmpassword ||
      password.length < 8 ||
      confirmpassword.length < 8
    ) {
      return res.json({
        state: State.FAILURE,
        message: {
          text: "Invalid credentials provided!",
          type: "danger",
        },
      });
    } else {
      user.password = password;
      await user.save();
      return res.json({
        state: State.FINISH,
        message: {
          text: "Your password was reset!",
          type: "success",
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = resetPassword;
