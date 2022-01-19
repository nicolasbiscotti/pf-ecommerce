import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import "./rubikFont.css";
import {
  borderscolor,
  flexSpacebetweenCenter,
  hoverPointer,
  hoverPointerLightblue,
  lightblue,
  mainBgcolor,
} from "./services";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
`;
export default GlobalStyle;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background: ${mainBgcolor};
  * {
    font-family: "Rubik", sans-serif;
    line-height: 1.25rem;
    font-size: 14px;
  }
`;

export const NavHeader = styled.div`
  height: 5.6vh;
  border-bottom: 0.01rem solid ${mainBgcolor};
`;

export const NavMain = styled.div`
  width: 100vw;
  height: 18vh;
  border-top: 1px solid ${borderscolor};
  ${flexSpacebetweenCenter};
  nav {
    width: 98vw;
    height: 100%;
    margin: 1rem 1.2rem;
    ${flexSpacebetweenCenter};
    border-bottom: 1px solid ${borderscolor};
  }
`;

export const NavFoot = styled.div`
  height: 6vh;
  margin: 0.5rem 2rem 0.5rem -0.25rem;
  ${flexSpacebetweenCenter};
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 40vw;
    height: 5rem;
    padding: 1.3rem 1.2rem 1.1rem;
    border: none;
    border-radius: 0.5rem 0 0 0.5rem;
    &::placeholder {
      color: #212529;
    }
  }
  button {
    width: 5rem;
    height: 5rem;
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
    background-color: ${lightblue};
    ${hoverPointer};
    img {
      width: 1.4rem;
      height: 1.4rem;
      margin: 0 auto;
    }
  }
`;

export const UserItems = styled.div`
  width: 25vw;
  height: 4rem;
  display: flex;
  justify-content: space-around;
`;

export const Logo = styled(NavLink)`
  color: white;
  font-size: 4.2rem;
  font-weight: 300;
  letter-spacing: 0rem;
  &:visited {
    color: white;
  }
`;

export const Login = styled.div`
  display: flex;
  color: white;
  font-weight: 400;
  letter-spacing: 0rem;
  img {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
    border: none;
    padding: 0.3rem 0.6rem 0.9rem;
  }
  div {
    ${hoverPointer};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p:first-child {
      color: rgba(232, 243, 243, 0.582);
    }
  }
`;

export const Cart = styled(Login)`
  img {
    padding: 0.5rem 0.6rem 0.7rem;
    ${hoverPointer};
  }
`;

export const BurgerMenu = styled.div`
  margin-top: 0.1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-weight: 500;
  ${hoverPointerLightblue};
  span {
    padding-bottom: 0.2rem;
  }
  img {
    width: 4.2rem;
    height: 4.4rem;
  }
`;

export const Shopsection = styled.div`
  width: 35vw;
  height: 100%;
  ${flexSpacebetweenCenter};
  font-weight: 500;
`;

export const Shopbutton = styled(NavLink)`
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
