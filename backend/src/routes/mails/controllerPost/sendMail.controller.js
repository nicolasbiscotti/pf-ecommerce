const sgMail = require("@sendgrid/mail");

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const URL_REACT = process.env.URL_REACT;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (req, res, next) => {
  try {
    const { customerName, date, amount, address, email } = req.body;
    console.log(email);
    const customer = customerName || "Dear Customer";
    const message = {
      to: email,
      from: { name: "ecommerce", email: "ekommercehenry19b@gmail.com" },
      subject: `Thank you for your order !`,
      text: "Hello from sendgrid",
      html: `<h1>Hello ${customer}:</h1>
      <h3>Your purchase has been confirmed !</h3>
      <p></p>
      <h3>For more information please click on the link bellow:</h3>
        <a href='${URL_REACT}/cart' alt="">Order Details</a>`,
    };
    sgMail
      .send(message)
      .then((response) => console.log("Email has been send"))
      .catch((error) => console.log(error));

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

module.exports = sendMail;
