import React from "react";
import { IconStyled } from "./styles";

export const Icon = ({ icon, bgColor }) => {
  return <IconStyled bgColor={bgColor}>{icon}</IconStyled>;
};
