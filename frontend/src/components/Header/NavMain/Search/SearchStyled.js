import styled from "styled-components";
import { lightblue } from "../../../../utilsStyles/utilsColors";
import { hoverPointer } from "../../../../utilsStyles/utilsMixins";

export const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 40vw;
    height: 5rem;
    padding: 1.3rem 1.2rem 1.1rem;
    border: none;
    border-radius: 0.5rem 0 0 0.5rem;
    &::placeholder {
      color: #212529;
    }
  }
  button {
    width: 5rem;
    height: 5rem;
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
    background-color: ${lightblue};
    ${hoverPointer};
    img {
      width: 1.4rem;
      height: 1.4rem;
      margin: 0 auto;
    }
  }
`;
