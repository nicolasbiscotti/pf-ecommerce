import React from "react";
import { useEffect } from "react";
import mpLogo from "../../../utilsStyles/utilsImages/mercadopago-logo2.png";
import { MercadopagoStyled } from "./MercadopagoStyled";
import axios from "axios";

// Agrega credenciales de SDK
const mp = new window.MercadoPago("TEST-b29e9d3d-10f3-428d-846f-22905f3128dd", {
  locale: "es-AR",
});

function MPCheckout({ order }) {
  useEffect(() => {
    /* const orderData = {
      quantity: 1,
      description: "asddd",
      price: 100,
    }; */
    axios("/mercadopago", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      data: {},
      /* body: JSON.stringify(orderData), */
    })
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .then(function (preference) {
        createCheckoutButton(preference.id);
      })
      .catch(function (error) {
        console.log(error);
        alert("Unexpected error");
      });
  });

  function createCheckoutButton(preferenceId) {
    // Initialize the checkout
    mp.checkout({
      preference: {
        id: preferenceId,
      },
      render: {
        container: ".button-checkout", // Class name where the payment button will be displayed
        label: ".", // Change the payment button text (optional)
      },
    });
  }
  return (
    <>
      <MercadopagoStyled>
        <div className="button-checkout">
          <img src={mpLogo} alt=""></img>
        </div>
      </MercadopagoStyled>
    </>
  );
}

export default MPCheckout;
