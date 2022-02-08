import styled from "styled-components";

export const AddressformStyled = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(7, 1fr);
  justify-items: center;
  gap: 2rem;
  div:first-child {
    grid-column: span 2;
  }
  button {
    grid-column: span 2;
    width: 50%;
    margin: auto 0;
  }
  @media screen and (min-width: 0px) and (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    gap: 3.2rem;
    margin: 3rem 1rem;
    align-items: center;
    div label {
      font-size: 1.6rem;
      position: absolute;
      top: -2rem;
      left: 0;
    }
    div:first-child {
      grid-column: span 2;
    }
    div {
      grid-column: span 2;
    }
  }
`;
