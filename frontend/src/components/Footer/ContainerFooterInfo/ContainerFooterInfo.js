import React from "react";
import { InfoOne } from "./InfoOne/InfoOne";
import { InfoTwo } from "./InfoTwo/InfoTwo";
import { ContainerFooterInfoStyled } from "./styles";

export const ContainerFooterInfo = () => {
  return (
    <ContainerFooterInfoStyled>
      <InfoOne />
      <InfoTwo />
    </ContainerFooterInfoStyled>
  );
};
