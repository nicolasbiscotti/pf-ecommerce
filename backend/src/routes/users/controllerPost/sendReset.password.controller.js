const transporter = require("../../../config/nodemailer");
const { REDIRECT_URI } = require("../../../constants/config");
const userService = require("../services/userService");
const State = {
  COMPLETE: "COMPLETE",
  FINISH: "FINISH",
  FAILURE: "FAILURE",
};

const sendResetPassLink = async (req, res, next) => {
  try {
    const user = await userService.findByEmailOrUsername(req.body);
    if (user) {
      transporter.sendMail({
        from: '"reset password 👻" <testedarcode@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: "reset password required ✔", // Subject line
        text: `${REDIRECT_URI}/resetPassword?id=${user.id}&token=${user.verificationToken}`, // plain text body
        //html: "<b>Hello world?</b>", // html body
      });
    }
    res.json({
      state: State.FINISH,
      message: {
        text: `Checkout your inbox`,
        type: "success",
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = sendResetPassLink;
