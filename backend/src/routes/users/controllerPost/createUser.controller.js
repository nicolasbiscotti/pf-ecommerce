const sendEMail = require("../../../config/nodemailer");
const {
  URL_BASE_BACKEND,
  NODEMAILER_USER,
} = require("../../../constants/config");
const userService = require("../services/userService");

const createUser = async (req, res, next) => {
  try {
    const [user, created] = await userService.createUser(req.body);
    if (created) {
      await sendEMail({
        from: `"verify email 👻" <${NODEMAILER_USER}>`, // sender address
        to: user.email, // list of receivers
        subject: "verify email ✔", // Subject line
        text: `${URL_BASE_BACKEND}/users/verify/${user.id}/${user.verificationToken}`, // plain text body
      });
      res.json({
        successfully: true,
        message: {
          text: `User ${user.username} created successfully`,
          type: "success",
        },
      });
    } else {
      res.json({
        successfully: false,
        message: {
          text: "The given email address or the username exist already!",
          type: "danger",
        },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;
