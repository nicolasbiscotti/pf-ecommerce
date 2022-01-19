import styled from "styled-components";
import { borderscolor } from "../../../utilsStyles/utilsColors";
import { flexSpacebetweenCenter } from "../../../utilsStyles/utilsMixins";

export const NavMainStyled = styled.div`
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
