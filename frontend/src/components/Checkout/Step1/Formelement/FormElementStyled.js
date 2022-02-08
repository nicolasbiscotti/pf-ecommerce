import styled from "styled-components";

export const FormElementStyled = styled.div`
  position: relative;
  width: 100%;
  label {
    padding: 0 0.2em;
    position: absolute;
    top: -1rem;
    left: 1rem;
    background-color: white;
  }
  input {
    width: 100%;
    padding: 1.6rem 0.8em 1.2rem;
    border-radius: 0.5em;
    border: 1px solid #adadad;
    outline: none;
    font-size: 1.6rem;
    &::placeholder {
      content: ${({ placeholder }) => placeholder || "algo"};
    }
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    input {
      height: 4.4rem;
      padding-left: 0.5rem;
    }
  }
`;
