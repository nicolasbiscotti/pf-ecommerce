const server = require("express").Router();
const express = require("express");
const cors = require("cors");

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token:
    "TEST-1956424169552169-012712-6b11b8b259b8cf1e4ea6ac34ab4a6da8-193113380",
});

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors());

// Crea un objeto de preferencia
/* let preference = {
  items: [
    {
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ],
}; */

server.post("/", (req, res) => {
  let preference = {
    items: [
      {
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
    back_urls: {
      success: "http://localhost:3000/feedback",
      failure: "http://localhost:3000/feedback",
      pending: "http://localhost:3000/feedback",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      res.json({ id: response.body.id });
    })
    .catch(function (error) {
      console.log(error);
    });
});

server.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

module.exports = server;
