import styled from "styled-components";
import { bgFormAdmin } from "../../../../utilsStyles/utilsColors";

export const CreateProductStyled = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media (min-width: 768px) {
    margin-left: 250px;
  }
  form {
    display: grid;
    gap: 3px;
    color: white;
    min-width: 320px;
    max-width: 640px;
    padding: 25px;
    background-color: ${bgFormAdmin};
    .selects {
      display: grid;
      gap: 3px;
    }
    .files {
      display: grid;
      gap: 3px;
    }
    @media (min-width: 375px) {
      .files {
        grid-template-columns: auto auto 1fr;
      }
      .selects {
        grid-template-columns: auto auto 1fr;
      }
    }
    @media (min-width: 768px) {
      .price {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3px;
      }
    }
  }
`;
