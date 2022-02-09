const userService = require("../services/userService");
const {REDIRECT_URI} = require("../../../constants/config")

const verification = async (req, res, next) => {
  try {
    const user = await userService.find(req.params.userId);
    if (
      !user ||
      req.params.token !== user.verificationToken ||
      !user.isActive
    ) {
      res.send(
        render({
          text: "Invalid credentials provided!",
          type: "danger",
        })
      );
    } else {
      user.verified = true;
      await user.save();
      res.send(
        render({
          text: "You have been verified!",
          type: "success",
        })
      );
    }
  } catch (error) {
    next(error);
  }
};

function render({ type, text }) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="favicon.ico" />
      <link rel="stylesheet" href="/style/style.css" />
      <title>pf.ecommercce</title>
    </head>
    <body>
      <div>
        <h3 class="${type}">${text}</h3>
        ${
          type === "success"
            ? `<a href="${REDIRECT_URI}">go to loggin ...</a>`
            : ""
        }
        
      </div>
    </body>
  </html>`;
}

module.exports = verification;
