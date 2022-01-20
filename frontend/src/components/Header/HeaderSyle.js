import styled from "styled-components";
import { mainBgcolor } from "../../utilsStyles/utilsColors";
import "../../utilsStyles/rubikFont.css";

export const HeaderStyled = styled.header`
  position: sticky;
  top: -23.6vh;
  width: 100%;
  background: ${mainBgcolor};
  z-index: 1;
  * {
    font-family: "Rubik", sans-serif;
    line-height: 1.25rem;
    font-size: 14px;
  }
  @media screen and (min-width: 550px) and (max-width: 992px) {
    position: sticky;
    top: -18vh;
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    position: sticky;
    top: -17.5vh;
  }
`;
