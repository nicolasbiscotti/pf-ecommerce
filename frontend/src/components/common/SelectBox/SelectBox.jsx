import React from "react";
import { SelectBoxStyled } from "./style";

const SelectBox = ({ data }) => {
  return (
    <SelectBoxStyled>
      {data &&
        data.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
    </SelectBoxStyled>
  );
};

export default SelectBox;
