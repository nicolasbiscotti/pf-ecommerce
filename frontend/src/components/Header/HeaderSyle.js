import styled from "styled-components";
import { mainBgcolor } from "../../utilsStyles/utilsColors";
import "../../utilsStyles/rubikFont.css";

export const HeaderStyled = styled.header`
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
