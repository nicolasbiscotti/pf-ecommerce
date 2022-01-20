import styled from "styled-components";
import { flexSpacebetweenCenter } from "../../../../utilsStyles/utilsMixins";

export const ShopsectionStyled = styled.div`
  width: 55vw;
  height: 100%;
  ${flexSpacebetweenCenter};
  font-weight: 500;
  margin-right: 15%;
  @media screen and (min-width: 550px) and (max-width: 992px) {
    width: 55vw;
    margin-right: 20%;
    @media screen and (min-width: 550px) and (max-width: 680px) {
      margin-right: 10%;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    width: 65vw;
    margin-right: 0;
  }
`;
