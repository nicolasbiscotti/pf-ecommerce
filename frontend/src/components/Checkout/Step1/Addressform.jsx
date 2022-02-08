import React, { useRef } from "react";
import { StyledButton } from "../../Login/Styled/StyledButton";
import { AddressformStyled } from "./AddressformStyled";
import FormElement from "./Formelement/FormElement";
import {
  placeholderFm,
  handleSubmitFm,
  handleChangeFm,
} from "./utils/functions";

function Addressform({ setFormData, setStep, formData }) {
  const fullname = useRef();
  const addressref = useRef();
  const addressCref = useRef();
  const cityref = useRef();
  const countryref = useRef();
  const postalcoderef = useRef();
  const emailref = useRef();

  const placeFholder = (ref) => {
    placeholderFm(
      ref,
      fullname,
      addressref,
      addressCref,
      cityref,
      countryref,
      postalcoderef,
      emailref
    );
  };

  const handleChange = (ref) => {
    handleChangeFm(ref, setFormData, formData);
  };

  const handleSubmit = () => {
    handleSubmitFm(formData, setStep);
  };

  return (
    <AddressformStyled>
      <FormElement
        setName="Full name"
        placeFholder={placeFholder}
        setRef={fullname}
        handleChange={handleChange}
        formData={formData}
      />
      <FormElement
        setName="Address"
        placeFholder={placeFholder}
        setRef={addressref}
        handleChange={handleChange}
        formData={formData}
      />
      <FormElement
        setName="Address continue"
        placeFholder={placeFholder}
        setRef={addressCref}
        handleChange={handleChange}
        formData={formData}
      />
      <FormElement
        setName="City"
        placeFholder={placeFholder}
        setRef={cityref}
        handleChange={handleChange}
        formData={formData}
      />
      <FormElement
        setName="Country"
        placeFholder={placeFholder}
        setRef={countryref}
        handleChange={handleChange}
        formData={formData}
      />
      <FormElement
        setName="Postal code"
        placeFholder={placeFholder}
        setRef={postalcoderef}
        handleChange={handleChange}
        formData={formData}
      />
      <FormElement
        setName="Email"
        placeFholder={placeFholder}
        setRef={emailref}
        handleChange={handleChange}
        formData={formData}
      />
      <StyledButton backgroundcolor={"#123456"} onClick={handleSubmit}>
        Submit
      </StyledButton>
    </AddressformStyled>
  );
}

export default Addressform;
