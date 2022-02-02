import React, { useState } from "react";
import PayPalCheckout from "./PayPalCheckout/PayPalCheckout";
import { CheckoutStyled, NavlinkHome } from "./CheckoutStyled";
import { IoIosArrowBack } from "react-icons/io";
import { Asidecards } from "./Aside/Asidecards";
import Addressform from "./Step1/Addressform";
import Step2 from "./Step2/Step2";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Checkout() {
  //cart --> {...products:[{name: "", amount: "", quantity: "", (opcional) img: ""},...] }
  const search = useLocation().search;
  const shippingAmount = new URLSearchParams(search).get("shipping");
  const cart = useSelector((store) => store.cart);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    address: "",
    addresscontinue: "",
    city: "",
    province: "",
    postalcode: "",
    email: "",
  });

  return (
    <CheckoutStyled>
      <div className="header-container">
        <NavlinkHome to="/">
          <IoIosArrowBack />
          <span>e-kommerce</span>
        </NavlinkHome>
      </div>
      <div className="main-container">
        <div className="app-container">
          <div>
            <span onClick={() => setStep(1)}>Step 1</span>
            <span onClick={() => setStep(2)}>Step 2</span>
            <span onClick={() => setStep(3)}>Step 3</span>
          </div>
          {step === 1 ? (
            <Addressform
              setFormData={setFormData}
              formData={formData}
              setStep={setStep}
            />
          ) : step === 2 ? (
            <Step2 formData={formData} setStep={setStep} />
          ) : (
            <PayPalCheckout
              cart={cart}
              formData={formData}
              shippingAmount={shippingAmount}
            />
          )}
        </div>
        <Asidecards cart={cart} shippingAmount={shippingAmount} />
      </div>
    </CheckoutStyled>
  );
}

export default Checkout;
