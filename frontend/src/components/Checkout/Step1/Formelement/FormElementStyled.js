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
    padding: 0.8em;
    padding-top: 2rem;
    border-radius: 0.5em;
    border: 1px solid #adadad;
    outline: none;
    &::placeholder {
      content: ${({ placeholder }) => placeholder || "algo"};
    }
  }
`;
