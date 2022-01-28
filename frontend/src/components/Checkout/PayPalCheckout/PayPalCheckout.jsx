import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalCheckout({ order, amountToPay }) {
  /* const orderItems = () => {
    if (order.items) {
      let items = order.items.map((i) => {
        return {
          name: i.name,
          unit_amount: {value: i.amount, currency_code: 'USD'},
          quantity: i.quantity,
          description: "",
        };
      });
      return items;
    }
    return null;
  }; */
  const payment = (data, actions) => {
    const payment = {
      purchase_units: [
        {
          amount: {
            value: "5.0" || "order.total",
            currency_code: "USD",
            breakdown: {
              item_total: { value: "5.0", currency_code: "USD" },
            },
          },
          description: "Buy in E-kommerce",
          items: /* () =>
            orderItems() ||  */ [
            {
              name: "i.name1",
              unit_amount: { value: "3", currency_code: "USD" }, // si no es igual la suma con amount_breakdown tira error
              quantity: "1",
              description: "",
            },
            {
              name: "i.name2",
              unit_amount: { value: "2", currency_code: "USD" },
              quantity: "1",
              description: "",
            },
          ],
        },
      ],
    };
    return actions.order.create(payment);
  };
  const onApprove = (data, actions) => {
    return actions.order
      .capture()
      .then((response) => {
        console.log(response);
        alert(`Payment processed correctly, ID: ${response.id}`);
      })
      .catch((error) => {
        console.log(error);
        alert("An error ocurred while processing the paymnet");
      });
  };
  const onError = (error) => {
    console.log(error);
    alert("Payment failed, try again");
  };
  const onCancel = (data, actions) => {
    alert("Payment was cancel by the user");
  };
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AZiW78_gEbx0Wdp3puDrpDaYyKLMXMK5ADl7kMOrmVIqYi57n9vJE8Wn6TrARd3O8nRLqmn0qqr0p2lM",
      }}
    >
      <PayPalButtons
        style={{
          layout: "horizontal",
          color: "gold",
          size: "medium",
          height: 40,
        }}
        createOrder={(data, actions) => payment(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
        onCancel={(data, actions) => onCancel(data, actions)}
        onError={(error) => onError(error)}
      />
    </PayPalScriptProvider>
  );
}
