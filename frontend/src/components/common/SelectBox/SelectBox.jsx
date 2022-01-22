import React from "react";
import { Button } from "../button/Button";
import { renderBoxData } from "./services";
import { SelectBoxStyled } from "./style";

const SelectBox = ({ data, title }) => {
  return (
    <SelectBoxStyled>
      <Button>{title}</Button>
      {data && renderBoxData(data)}
    </SelectBoxStyled>
  );
};

export default SelectBox;
