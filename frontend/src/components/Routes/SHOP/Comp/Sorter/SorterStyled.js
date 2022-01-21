import styled from "styled-components";

export const SorterStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  span {
    font-family: "Rubik", sans-serif;
    font-size: 1.3rem;
  }

  select {
    width: 150px;
    font-family: "Rubik", sans-serif;
    padding: 0.2rem;
    font-size: 1.1rem;
    border: 1px solid #c7c7c7;
    border-radius: 4px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;
