import styled from "styled-components";

export const ViewcardStyled = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: minmax(80%, 250px);
  grid-template-rows: auto;
  grid-gap: 1.5rem;
  margin-top: 1rem;

  @media screen and (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    justify-content: space-around;
    margin: 1rem;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
