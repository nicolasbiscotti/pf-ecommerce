import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalCheckout({ order, amountToPay, formData }) {
  /*
    const orderItems = order.items.length > 0 && order.items.map((i) => {
        return {
          name: i.name,
          unit_amount: {value: i.amount, currency_code: 'USD'},
          quantity: i.quantity,
          description: "",
        };
      const orderItemsTotal = orderItems.reduce((i,a) => (i.unit_amount.value * i.quantity) + a).toString();
    const purchaseAmount = {
      value: orderItemsTotal,
      currency_code: "USD",
      breakdown: {
        item_total: { value: orderItemsTotal, currency_code: "USD" },
      },
    },
    //"purchase_units.amount: purchaseAmount"


     const payer = {
        email_address: formData.email,
        // phone: {
        //   phone_number: {
        //       national_number: '4543433243',
        //   }
        // },
        // name: {
        //   given_name: 'PayPal',
        //   surname: 'Customer',
        // },
        address: {
          address_line_1: formData.address + " " + formData.addresscontinue,
          address_line_2: 'Apt 2',
          admin_area_2: formData.city,
          admin_area_1: formData.province ||'CA',
          postal_code: formData.postalcode,
          country_code: 'AR',
        },
    }

  }; */
  const payment = (data, actions) => {
    const payment = {
      payer: {
        email_address: formData.email,
        // phone: {
        //   phone_number: {
        //       national_number: '4543433243',
        //   }
        // },
        // name: {
        //   given_name: 'PayPal',
        //   surname: 'Customer',
        // },
        address: {
          address_line_1: formData.address + " " + formData.addresscontinue,
          address_line_2: "Apt 2",
          admin_area_2: formData.city,
          admin_area_1: formData.province || "CA",
          postal_code: formData.postalcode,
          country_code: "AR",
        },
      },
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
          items: /* orderItems ||  */ [
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
          shipping: {
            name: {
              full_name: "",
            },
            address: {
              address_line_1: formData.address + " " + formData.addresscontinue,
              address_line_2: "Apt 2",
              admin_area_2: formData.city,
              admin_area_1: formData.province || "CA",
              postal_code: formData.postalcode,
              country_code: "AR",
            },
          },
        },
      ],
    };
    return actions.order.create(payment);
  };
  const onApprove = (data, actions) => {
    return actions.order
      .capture()
      .then((res) => {
        // let payments = res.purchase_units.payments.capture;
        // let date = payments.create_time;
        // let status = payments[0].status;
        // let payment = payments[0].amount.value; // amount
        // let address = res.purchase_units.shipping.address; // Object
        //let email = res.payer.email_address;
        console.log(res);
        alert(`Payment processed correctly, ID: ${res.id}`);
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
        }}
        createOrder={(data, actions) => payment(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
        onCancel={(data, actions) => onCancel(data, actions)}
        onError={(error) => onError(error)}
      />
    </PayPalScriptProvider>
  );
}

// "payer": {
//   "name": {
//     "given_name": "John",
//     "surname": "Doe"
//   },
//   "email_address": "sb-ndnre8251267@personal.example.com",
//   "payer_id": "BFULD4NEGFX7L",
//   "address": {
//     "country_code": "AR"
//   }
// },

//purchase_units
//
//"shipping": {
//  "name": {
//    "full_name": "John Doe"
//  },
//  "address": {
//    "address_line_1": "Free Trade Zone",
//    "admin_area_2": "Buenos Aires",
//    "admin_area_1": "Buenos Aires",
//    "postal_code": "B1675",
//    "country_code": "AR"
//  }
//},

//"payments": {
//  "captures": [
//    {
//      "id": "7JL30426W2752740U",
//      "status": "COMPLETED",
//      "amount": {
//        "currency_code": "USD",
//        "value": "5.00"
//      },
//      "final_capture": true,
//      "seller_protection": {
//        "status": "ELIGIBLE",
//        "dispute_categories": [
//          "ITEM_NOT_RECEIVED",
//          "UNAUTHORIZED_TRANSACTION"
//        ]
//      },
//      "create_time": "2022-01-29T12:50:06Z",
//      "update_time": "2022-01-29T12:50:06Z"
//    }
//  ]
//}
