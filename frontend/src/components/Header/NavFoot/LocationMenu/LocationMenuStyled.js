import styled from "styled-components";
import { hoverPointerLightblue } from "../../../../utilsStyles/utilsMixins";

export const LocationMenuStyled = styled.div`
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
  svg {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: 0.4rem;
  }
  @media screen and (min-width: 0px) and (max-width: 770px) {
    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    div p {
      font-size: 1.3rem;
    }
  }
`;
