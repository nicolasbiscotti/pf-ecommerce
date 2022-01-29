import { css } from "styled-components";
import { bgInputAdmin } from "./utilsColors";

export const basicInputStyle = () => css`
  color: white;
  width: 100%;
  background-color: ${bgInputAdmin};
  border: none;
  padding: 10px;
  outline: none;
  &:focus {
    background-color: gray;
  }
`;

export const removeBtnInputNumber = () => css`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
