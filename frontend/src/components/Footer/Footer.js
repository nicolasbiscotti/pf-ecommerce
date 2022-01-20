import React from "react";
import { ContainerCardFooter } from "./ContainerCardFooter/ContainerCardFooter";
import { ContainerFooterInfo } from "./ContainerFooterInfo/ContainerFooterInfo";
import { Copyright } from "./Copyright/Copyright";
import { FooterStyled } from "./styles";

export const Footer = () => {
  return (
    <>
      <FooterStyled>
        <ContainerCardFooter />
        <ContainerFooterInfo />
        <Copyright />
      </FooterStyled>
    </>
  );
};
