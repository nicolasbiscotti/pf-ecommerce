import React, { useRef } from "react";
import { StyledButton } from "../../Login/Styled/StyledButton";
import { AddressformStyled } from "./AddressformStyled";
import FormElement from "./Formelement/FormElement";

function Addressform({ setFormData, setStep, formData }) {
  const fullname = useRef();
  const addressref = useRef();
  const addressCref = useRef();
  const cityref = useRef();
  const provinceref = useRef();
  const postalcoderef = useRef();
  const emailref = useRef();

  const placeFholder = (ref) => {
    ref.current.name === "Full name"
      ? (fullname.current.placeholder = "")
      : (fullname.current.placeholder = "Full name");
    ref.current.name === "Address"
      ? (addressref.current.placeholder = "")
      : (addressref.current.placeholder = "Address");
    ref.current.name === "Address continue"
      ? (addressCref.current.placeholder = "")
      : (addressCref.current.placeholder = "Address continue (optional)");
    ref.current.name === "City"
      ? (cityref.current.placeholder = "")
      : (cityref.current.placeholder = "City");
    ref.current.name === "Province"
      ? (provinceref.current.placeholder = "")
      : (provinceref.current.placeholder = "Province");
    ref.current.name === "Postal code"
      ? (postalcoderef.current.placeholder = "")
      : (postalcoderef.current.placeholder = "Postal code");
    ref.current.name === "Email"
      ? (emailref.current.placeholder = "")
      : (emailref.current.placeholder = "Email");
  };
  const handleChange = (ref) => {
    let value = ref.current.value;
    let name = ref.current.name.toLowerCase().replace(" ", "");
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    let validate = false;
    for (let prop in formData) {
      if (prop === "email") {
        //eslint-disable-next-line
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData[prop])
          ? (validate = true)
          : (validate = false);
      } else if(prop === "addresscontinue") {
        continue
      } else if (formData[prop].length > 0) validate = true;
      if (!validate) break;
    }
    validate ? setStep(2) : alert("Invalid data");
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
        setName="Province"
        placeFholder={placeFholder}
        setRef={provinceref}
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
