import { css } from "styled-components";
import { bgButtonAdmin } from "./utilsColors";

const width = "150px";
//recuerde poner positon:relative; al padre
export const labelFileStyle = () => css`
  display: inline-block;
  background-color: ${bgButtonAdmin};
  border: none;
  color: white;
  font-weight: bold;
  width: ${width};
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
`;
export const inputFileStyle = () => css`
  opacity: 0;
  width: ${width};
  position: absolute;
  top: 0;
  left: 0;
`;
