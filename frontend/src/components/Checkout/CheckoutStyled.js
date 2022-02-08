import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mainBgcolor, borderscolor } from "../../utilsStyles/utilsColors";

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
  span {
    padding-left: 2rem;
  }
`;

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
      min-height: 30vh;
      margin-top: 1rem;
      padding: 2rem 1.5rem 0;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 15%);
    }

    .steps {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .step {
      position: relative;
      line-height: 1.5;
      text-align: center;
      height: 30px;
      width: 30px;
      margin: 0 1rem;
      display: block;
      border: 2px solid #263c97;
      border-radius: 50%;
      cursor: pointer;
    }

    .step:before,
    .step:after {
      position: absolute;
      content: "";
      display: block;
      width: 20px;
      height: 3px;
      bottom: 11px;
      right: -22px;
      background: #263c97;
    }

    .app-container .step:last-child:before,
    .app-container .step:last-child:after {
      display: none;
    }

    .step.active {
      background-color: #263c97;
    }

    .check {
      color: #fff;
      vertical-align: middle;
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1280px) {
    .main-container {
      padding: 0 1.5rem 0 1rem;
      .app-container {
        width: 65%;
        margin-right: 1px;
      }
    }
  }
  @media screen and (min-width: 780px) and (max-width: 992px) {
    .main-container {
      padding: 0 1rem;
      .app-container {
        width: 65%;
        padding: 2rem 0.5rem 0;
        margin-right: 2px;
      }
    }
  }
  @media screen and (min-width: 0px) and (max-width: 780px) {
    .main-container {
      width: 100%;
      min-height: calc(100vh - 6rem);
      padding: 0 2rem 0 2rem;
      flex-direction: column-reverse;
      .app-container {
        width: 100%;
        margin-top: 1rem;
        padding: 2rem 1rem 0;
      }
    }
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    .main-container {
      padding: 0 1rem;
    }
  }
`;
