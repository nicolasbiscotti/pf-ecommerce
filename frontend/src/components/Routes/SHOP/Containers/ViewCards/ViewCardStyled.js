import styled from "styled-components";

export const ViewcardStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5rem;
  height: auto;
  .containerProduct {
    width: 48%;
    display: block;
  }

  @media screen and (min-width: 550px) {
    .containerProduct {
      max-width: 250px;
    }
  }

  @media screen and (min-width: 992px) {
    .containerProduct {
      max-width: 250px;
    }
  }
`;
