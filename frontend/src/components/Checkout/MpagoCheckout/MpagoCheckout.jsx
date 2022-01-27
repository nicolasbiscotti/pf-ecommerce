import React from "react";
import { useEffect } from "react";

// Agrega credenciales de SDK
const mp = new window.MercadoPago("TEST-b29e9d3d-10f3-428d-846f-22905f3128dd", {
  locale: "es-AR",
});

function MpagoCheckout() {
  useEffect(() => {
    const orderData = {
      quantity: 1,
      description: "asddd",
      price: 100,
    };
    fetch("http://localhost:3001/mercadopago", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (preference) {
        createCheckoutButton(preference.id);
      })
      .catch(function () {
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
        label: "Pay", // Change the payment button text (optional)
      },
    });
  }
  return (
    <>
      <div className="button-checkout"></div>
    </>
  );
}

export default MpagoCheckout;
