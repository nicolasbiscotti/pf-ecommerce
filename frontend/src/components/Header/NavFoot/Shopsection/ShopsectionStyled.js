import styled from "styled-components";
import { flexSpacebetweenCenter } from "../../../../utilsStyles/utilsMixins";

export const ShopsectionStyled = styled.div`
  width: 78%;
  height: 100%;
  ${flexSpacebetweenCenter};
  justify-content: space-around;
  font-weight: 500;
  @media screen and (min-width: 550px) and (max-width: 992px) {
    width: 72%;
  }
  @media screen and (min-width: 550px) and (max-width: 770px) {
    width: 80%;
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    width: 65vw;
  }
`;
