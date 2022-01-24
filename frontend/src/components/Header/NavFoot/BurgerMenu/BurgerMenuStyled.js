import styled from "styled-components";
import { hoverPointerLightblue } from "../../../../utilsStyles/utilsMixins";

export const BurgerMenuStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-weight: 500;
  ${hoverPointerLightblue};
  div {
    padding-left: 0.3rem;
    p {
      font-weight: 200;
      text-align: center;
    }
    p:nth-child(1) {
      color: rgba(232, 243, 243, 0.582);
    }
  }
`;
