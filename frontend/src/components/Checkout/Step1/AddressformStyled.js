import styled from "styled-components";

export const AddressformStyled = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(7, 1fr);
  justify-items: center;
  gap: 2rem;
  button {
    grid-column: span 2;
    width: 50%;
  }
`;
