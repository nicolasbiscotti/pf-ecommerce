import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CheckoutStyled, NavlinkHome } from "./CheckoutStyled";
import { Asidecards } from "./Aside/Asidecards";
import Addressform from "./Step1/Addressform";
import Step2 from "./Step2/Step2";
import PayPalCheckout from "./PayPalCheckout/PayPalCheckout";
import { IoIosArrowBack } from "react-icons/io";
import { MdCheckCircle } from "react-icons/md";

function Checkout() {
  const search = useLocation().search;
  const shippingAmount = new URLSearchParams(search).get("shipping");
  const cart = useSelector((store) => store.cart);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullname: "",
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
      {step !== 4 ? (
        <div className="main-container">
          <div className="app-container">
            <div>
              <span onClick={() => setStep(1)}>Step 1</span>
              <span onClick={() => setStep(2)}>Step 2</span>
              <span onClick={() => setStep(3)}>Step 3</span>
              <span onClick={() => setStep(4)}>Step 4</span>
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
                setStep={setStep}
              />
            )}
          </div>
          <Asidecards cart={cart} shippingAmount={shippingAmount} />
        </div>
      ) : (
        <div className="success-container">
          <MdCheckCircle
            style={{ color: "rgba(0,128,0,.75)", fontSize: "10rem" }}
          />
          <h1 style={{ marginBottom: "8rem" }}>
            Your purchase has been confirmed !
          </h1>
          <p style={{ color: "rgba(0,0,0,.6)", textAlign: "center" }}>
            Brevely you will recive an email with the data of your transaction.
          </p>
          <NavlinkHome to="/">
            <p style={{ color: "rgba(0,0,0,.6)", textAlign: "center" }}>
              <br /> Return to Home
            </p>
          </NavlinkHome>
        </div>
      )}
    </CheckoutStyled>
  );
}

export default Checkout;
