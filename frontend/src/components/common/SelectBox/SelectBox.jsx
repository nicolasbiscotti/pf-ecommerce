import React, { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { renderBoxData } from "./services";
import { SelectBoxStyled } from "./style";

const SelectBox = ({ data, title, action, init }) => {
  const [dataSelectBox, setDataSelectBox] = useState(init ? init : []);
  useEffect(() => {
    action && action({ dataSelectBox });
  }, [dataSelectBox, action]);
  return (
    <SelectBoxStyled>
      <Button>{title}</Button>
      {data && renderBoxData({ data, dataSelectBox, setDataSelectBox, init })}
    </SelectBoxStyled>
  );
};

export default SelectBox;
