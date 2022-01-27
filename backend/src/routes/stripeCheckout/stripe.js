const { Router } = require("express");
const stripe = require("stripe")(
  "sk_test_51KMV6rEd2OFjgDPRmcwxFrHet2RMiIAsQDPdlI7CXtEDqF1Iy3B6YnvwCeXt6wRjWrVbywlKIiXQxb6wtaZYHdYl008gBKjhql"
);

const stripeCO = Router();

const price = async () =>
  await stripe.prices.create({
    currency: "mxn",
    recurring: {
      interval: "month",
      usage_type: "metered",
    },
    product_data: {
      name: "Gold special",
    },
    nickname: "Gold special price",
    unit_amount: 3000,
  });

stripeCO.post("/", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: () => price(),
        quantity: 1,
        currency: "mxn",
        amount: 3000,
        name: "assfsf",
      },
    ],
    mode: "payment",
    success_url: `http://localhost:3000/checkout?success=true`,
    cancel_url: `http://localhost:3000/checkout?canceled=true`,
  });
  res.redirect(303, session.url);
});

module.exports = stripeCO;
