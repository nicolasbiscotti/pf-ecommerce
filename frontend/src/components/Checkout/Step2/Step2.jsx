import React from "react";
import { StyledButton } from "../../Login/Styled/StyledButton";
import { Step2Styled } from "./Step2Styled";

function Step2({ formData, setStep }) {
  return (
    <Step2Styled>
      <div className="card">
        <div>
          <div>
            Address: {formData.address} {formData.addresscontinue}
          </div>
          <div>City: {formData.city + ", " + formData.province + "."}</div>
        </div>
        <div>
          <div>Postal code: {formData.postalcode}</div>
          <div>
            Email:<br></br>
            {formData.email}
          </div>
        </div>
      </div>
      <StyledButton backgroundcolor={"#123456"} onClick={() => setStep(3)}>
        Continue
      </StyledButton>
    </Step2Styled>
  );
}

export default Step2;
