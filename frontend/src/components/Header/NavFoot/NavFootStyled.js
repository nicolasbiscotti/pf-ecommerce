import styled from "styled-components";
import { flexSpacebetweenCenter } from "../../../utilsStyles/utilsMixins";

export const NavFootStyled = styled.div`
  height: 6vh;
  margin: 0.5rem 0.5rem 0.5rem 4rem;
  ${flexSpacebetweenCenter};
  @media screen and (min-width: 0px) and (max-width: 992px) {
    padding-right: 0;
    margin-left: 2.5rem;
    margin-right: 0;
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    margin-left: 1.5rem;
  }
`;
