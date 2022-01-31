import React from "react";
import { FormElementStyled } from "./FormElementStyled";

function FormElement({ setRef, placeFholder, setName, handleChange }) {
  return (
    <FormElementStyled>
      <label>{setName}</label>
      <input
        type="text"
        name={setName}
        placeholder={setName}
        ref={setRef}
        onFocus={() => placeFholder(setRef)}
        onChange={() => handleChange(setRef)}
      />
    </FormElementStyled>
  );
}

export default FormElement;
