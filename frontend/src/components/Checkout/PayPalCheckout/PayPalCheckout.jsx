import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { deleteCart } from "../../../redux/reducers/cart/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
import { PayPalStyle } from "./PayPalStyle";

export default function PayPalCheckout({
  cart,
  formData,
  shippingAmount,
  setStep,
  userData,
}) {
  const dispatch = useDispatch();

  const orderItems = cart.products.map((i) => {
    return {
      name: i.name,
      unit_amount: { value: i.price.toString(), currency_code: "USD" },
      quantity: i.count.toString(),
      description: "",
    };
  });
  const orderItemsTotal = cart.getSubtotalPrice().toString();
  const purchaseAmount = {
    value: shippingAmount
      ? Number(orderItemsTotal) + Number(shippingAmount) + ".0"
      : orderItemsTotal,
    currency_code: "USD",
    breakdown: {
      item_total: {
        value: orderItemsTotal + ".0",
        currency_code: "USD",
      },
      shipping: {
        currency_code: "USD",
        value: shippingAmount ? shippingAmount + ".0" : "0.0",
      },
    },
  };
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
        //   given_name: "PayPal",
        //   surname: "Customer",
        // },
        address: {
          address_line_1: formData.address,
          address_line_2: formData.addresscontinue,
          admin_area_2: formData.city,
          admin_area_1: formData.country || "CA",
          postal_code: formData.postalcode,
          country_code: "AR",
        },
      },
      purchase_units: [
        {
          amount: purchaseAmount,
          description: "Buy in E-kommerce",
          items: orderItems,
          shipping: {
            name: {
              full_name: formData.fullname,
            },
            address: {
              address_line_1: formData.address,
              address_line_2: formData.addresscontinue,
              admin_area_2: formData.city,
              admin_area_1: formData.country || "CA",
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
        let payments = res.purchase_units[0].payments.captures[0];
        let status = payments.final_capture;
        if (status) {
          let date = payments.create_time;
          let amount = {
            total: payments.amount.value,
            shipping: shippingAmount,
            orderItemsTotal: orderItemsTotal,
          };
          let address = Object.values(
            res.purchase_units[0].shipping.address
          ).reduce((a, s) => a + " " + s);
          let customerName = res.purchase_units[0].shipping.name.full_name;
          let products = cart.products.map((p) => {
            return {
              id: p.idProduct,
              name: p.name,
              img: p.img,
              price: p.price,
              amount: p.count,
            };
          });

          const orderData = {
            date,
            amount,
            address,
            email: formData.email,
            customerName,
            products,
            idUser: userData.id,
          };
          swal({
            title: `Payment processed correctly`,
            text: `ID: ${res.id}`,
            icon: "success",
            button: "Accept",
          });
          axios.all([
            axios("/sendmail", {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
              },
              data: { ...orderData },
            }),
            axios("/orders", {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
              },
              data: { ...orderData },
            }),
          ]);
          dispatch(deleteCart());
          setStep(4);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("An error ocurred while processing the payment");
      });
  };

  const onError = (error) => {
    console.log(error);
    swal({
      title: `Payment has failed, please try again`,
      icon: "error",
    });
  };
  const onCancel = (data, actions) => {
    swal({
      title: `Payment was cancel by the user`,
      icon: "error",
    });
  };
  return (
    <PayPalStyle>
      <p>Pay with:</p>
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
    </PayPalStyle>
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

// "payments": {
//   "captures": [
//     {
//       "id": "7JL30426W2752740U",
//       "status": "COMPLETED",
//       "amount": {
//         "currency_code": "USD",
//         "value": "5.00"
//       },
//       "final_capture": true,
//       "seller_protection": {
//         "status": "ELIGIBLE",
//         "dispute_categories": [
//           "ITEM_NOT_RECEIVED",
//           "UNAUTHORIZED_TRANSACTION"
//         ]
//       },
//       "create_time": "2022-01-29T12:50:06Z",
//       "update_time": "2022-01-29T12:50:06Z"
//     }
//   ]
// }

//let email = res.payer.email_address;
//let items = res.purchase_units[0].items //[{name unit_amout(.value) quantity},{}]
//address Object address_line_1: "Sarmiento 4642", address_line_2: "Apt 2" admin_area_1: "Argentina",admin_area_2: "Santa Fe",country_code: "AR", postal_code: //"3000"
