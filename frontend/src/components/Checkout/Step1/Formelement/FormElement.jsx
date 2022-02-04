import React from "react";
import { FormElementStyled } from "./FormElementStyled";

function FormElement({
  setRef,
  placeFholder,
  setName,
  handleChange,
  formData,
}) {
  return (
    <FormElementStyled>
      <label>{setName}</label>
      <input
        type="text"
        name={setName}
        placeholder={setName}
        ref={setRef}
        value={formData[setName.toLowerCase().replace(" ", "")]}
        onFocus={() => placeFholder(setRef)}
        onChange={() => handleChange(setRef)}
      />
    </FormElementStyled>
  );
}

export default FormElement;
