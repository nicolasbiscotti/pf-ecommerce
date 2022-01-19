import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { hoverPointerLightblue } from "../../../../../utilsStyles/utilsMixins";
import { lightblue } from "../../../../../utilsStyles/utilsColors";

export const ShopbuttonStyled = styled(NavLink)`
  padding: 0.6rem;
  position: relative;
  overflow: hidden;
  border: none;
  color: white;
  background-color: transparent;
  text-align: center;
  font-weight: 500;
  ${hoverPointerLightblue};
  &::after {
    width: 0;
    height: 0.2rem;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    background-color: white;
    transition: width 0.35s ease, left 0.35s ease, background-color 0.35s ease;
  }
  &:hover::after {
    width: 80%;
    left: 10%;
    background-color: ${lightblue};
  }
`;
