import styled from "styled-components";
import { hoverPointerLightblue } from "../../../../utilsStyles/utilsMixins";

export const BurgerMenuStyled = styled.div`
  margin-top: 0.1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-weight: 500;
  ${hoverPointerLightblue};
  span {
    padding-bottom: 0.2rem;
  }
  img {
    width: 4.2rem;
    height: 4.4rem;
  }
`;
