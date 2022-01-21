import styled from "styled-components";
import { lightblue } from "../../../../utilsStyles/utilsColors";
import { hoverPointer } from "../../../../utilsStyles/utilsMixins";

export const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  input {
    width: 40vw;
    height: 5rem;
    padding: 1.3rem 1.2rem 1.1rem;
    border: none;
    border-radius: 0.5rem 0 0 0.5rem;
    color: #0c1417;
    &::placeholder {
      color: #212529;
      font-size: 1.4rem;
    }
    font-size: 1.6rem;
    &:focus {
      outline: none;
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
  .dataResult {
    position: absolute;
    top: 5.1rem;
    left: 0;
    width: 100%;
    max-height: 13.5rem;
    z-index: 2;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    p {
      height: 4.5rem;
      margin-left: 1rem;
      display: flex;
      align-items: center;
      color: #0c1417;
      ${hoverPointer};
    }
  }
`;
