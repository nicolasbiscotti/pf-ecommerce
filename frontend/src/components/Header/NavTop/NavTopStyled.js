import styled from "styled-components";
import { mainBgcolor } from "../../../utilsStyles/utilsColors";

export const NavTopStyled = styled.div`
  height: 5.6vh;
  border-bottom: 0.01rem solid ${mainBgcolor};
  @media screen and (min-width: 550px) and (max-width: 992px) {
    height: 3vh;
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    height: 2.5vh;
  }
`;
