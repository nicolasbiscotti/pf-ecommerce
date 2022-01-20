import styled from "styled-components";

export const NewsLetterStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  input {
    width: 100%;
    max-width: 350px;
    padding: 3%;
    height: 50px;
    border: none;
    border-radius: 5px 0 0 5px;
    &:focus {
      outline: none;
    }
  }
  button {
    background-color: #16bcdc;
    padding: 3%;
    line-height: 1;
    height: 50px;
    border: none;
    border-radius: 0 5px 5px 0;
    color: #fff;
    &:focus {
      outline: none;
    }
  }
`;
