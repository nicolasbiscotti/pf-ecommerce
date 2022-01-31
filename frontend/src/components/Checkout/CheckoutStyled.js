import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mainBgcolor, borderscolor } from "../../utilsStyles/utilsColors";

export const CheckoutStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ededed;
  font-family: Proxima Nova, -apple-system, Helvetica Neue, Helvetica, Roboto,
    Arial, sans-serif;
  .header-container {
    width: 100%;
    height: 6rem;
    padding: 1.5rem 4rem 1.5rem 2rem;
    background-color: ${mainBgcolor};
    border: none;
    border-top: 1px solid ${borderscolor};
    border-bottom: 1px solid ${borderscolor};
    display: flex;
    align-items: center;
  }
  .main-container {
    width: 100%;
    min-height: calc(100vh - 6rem);
    padding: 0 5.5rem 0 6rem;
    display: flex;
    justify-content: space-between;
    .app-container {
      width: 60%;
      margin-top: 1rem;
      padding: 2rem 1.5rem 0;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 15%);
    }
  }
`;

export const NavlinkHome = styled(NavLink)`
  color: white;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0rem;
  display: flex;
  align-items: center;
  &:visited {
    color: white;
  }
`;
