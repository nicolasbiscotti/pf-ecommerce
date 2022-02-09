const sgMail = require("@sendgrid/mail");

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (req, res, next) => {
  try {
    const { customerName, date, amount, address, email, products } = req.body;
    const customer = customerName || "Dear Customer";
    const message = {
      from: { name: "ecommerce", email: "ekommercehenry19b@gmail.com" },
      template_id: "d-d56c76482f9a4ca283a42b9a53e4e3b4",
      personalizations: [
        {
          to: { email: email },
          dynamic_template_data: {
            subject: "Thank you for your order !",
            items: products,
            amount: amount,
            date: date,
            customer: customer,
            address: address,
            expectedDeliveryTime: "",
          },
        },
      ],
    };
    sgMail
      .send(message)
      .then((response) => console.log("Email has been send"))
      .catch((error) => console.log(error));

    res.json({ success: true, message: "ok" });
  } catch (error) {
    next(error);
  }
};

const orderDispatch = async (req, res, next) => {
  try {
    const { name: customer, email } = req.query;
    const message = {
      to: email,
      from: { name: "ecommerce", email: "ekommercehenry19b@gmail.com" },
      subject: `Your order has been dispatched !`,
      text: "Hello",
      html: `<h2>Hello ${customer} </h2>
      <h2>We are glad to inform you that your order just has been dispatched</h2>
      <hr/><br/>
      <h3>Thank you for shopping at <img src="https://i.postimg.cc/6p5Y84SQ/Partners-logo-kommerce.png" alt=""></img></h3>
        `,
    };
    sgMail
      .send(message)
      .then((response) => console.log("Email has been send"))
      .catch((error) => console.log(error));

    res.json({ msg: "Email has been send" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendMail, orderDispatch };
