import styled from "styled-components";
import { BoxStyled } from "../Box/BoxStyled";

export const BurgerMenuStyled = styled.div`
  display: none;
  .close-icon {
    position: relative;
    .close-icon-vignette {
      position: absolute;
      top: 4.3vh;
      right: 3px;
      background: white;
      width: 25px;
      height: 15px;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
  }
  .hiddenmenu {
    display: none;
    width: 100%;
    height: 20vh;
    position: absolute;
    flex-direction: column;
    top: 8vh;
    left: 0;
    padding: 1rem 1rem 0.5rem;
    background-color: #fff;
    border-radius: 2px;
    z-index: 9999;
    font-size: 2rem;
    ${BoxStyled} {
      padding: 0.5rem 0.2rem;
      height: 50%;
      div {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
      }
      p {
        height: 50px;
        width: 48%;
        border-radius: 6px;
        color: white;
        text-align: center;
        line-height: 50px;
        font-size: 1.4rem;
        background-color: #5168f4;
      }
      p:nth-child(2) {
        background-color: #fff;
        border: 2px solid #5168f4;
        color: #5168f4;
      }
      img {
        display: none;
      }
    }
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    display: flex;
    color: white;
    padding-top: 4px;
    margin-left: 20px;
    svg {
      width: 3rem;
      height: 3rem;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 380px) {
    margin-left: 10px;
  }
`;
