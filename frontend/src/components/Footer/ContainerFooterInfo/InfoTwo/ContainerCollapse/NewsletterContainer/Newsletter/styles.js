import styled from "styled-components";

export const NewsLetterStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  input {
    width: 100%;
    max-width: 350px;
    padding: 1rem;
    height: 50px;
    border: none;
    border-radius: 5px 0 0 5px;
    &:focus {
      outline: none;
    }
  }
  button {
    display: flex;
    align-items: center;
    background-color: #16bcdc;
    padding: 0 1rem;
    max-width: 200px;
    height: 50px;
    border: none;
    border-radius: 0 5px 5px 0;
    color: #fff;
    &:focus {
      outline: none;
    }
  }
`;
