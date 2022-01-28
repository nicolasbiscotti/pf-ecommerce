import styled from "styled-components";

export const CreateProductStyled = styled.form`
  display: grid;
  gap: 15px;
  margin-left: 250px;
  color: white;
  min-width: 320px;
  max-width: 640px;
  padding: 25px;
  .price {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
  }
  .files {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 3px;
  }
  .selects {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 3px;
  }
`;
