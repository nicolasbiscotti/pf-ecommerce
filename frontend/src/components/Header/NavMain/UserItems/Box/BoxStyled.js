import styled from "styled-components";
import { hoverPointer } from "../../../../../utilsStyles/utilsMixins";

export const BoxStyled = styled.div`
  display: flex;
  color: white;
  font-weight: 400;
  letter-spacing: 0rem;
  img {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
    border: none;
    padding: 0.3rem 0.6rem 0.9rem;
  }
  div {
    ${hoverPointer};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p:first-child {
      color: rgba(232, 243, 243, 0.582);
    }
  }
`;
