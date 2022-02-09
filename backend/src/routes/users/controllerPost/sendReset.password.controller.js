const transporter = require("../../../config/nodemailer");
const { REDIRECT_URI } = require("../../../constants/config");
const userService = require("../services/userService");

const sendResetPassLink = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userService.findByEmail(email);
    if (user || user.isActive) {
      transporter.sendMail({
        from: '"reset password 👻" <testedarcode@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: "reset password required ✔", // Subject line
        text: `${REDIRECT_URI}/passwordreset?id=${user.id}&token=${user.verificationToken}`, // plain text body
        //html: "<b>Hello world?</b>", // html body
      });
    }
    res.json({
      successfully: true,
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
