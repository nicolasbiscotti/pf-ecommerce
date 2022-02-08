import React from "react";
import { StyledButton } from "../../Login/Styled/StyledButton";
import { Step2Styled } from "./Step2Styled";

function Step2({ formData, setStep }) {
  return (
    <Step2Styled>
      <div className="card">
        <div className="row-1">
          <div>Name: {formData.fullname}</div>
          <div>
            Address: {formData.address} {formData.addresscontinue}
          </div>
          <div>City: {formData.city + ", " + formData.country + "."}</div>
        </div>
        <div className="row-2">
          <div>Postal code: {formData.postalcode}</div>
          <div>
            Email:<br></br>
            {formData.email}
          </div>
        </div>
      </div>
      <StyledButton onClick={() => setStep(1)}>Back</StyledButton>
      <StyledButton onClick={() => setStep(3)}>Continue</StyledButton>
    </Step2Styled>
  );
}

export default Step2;
