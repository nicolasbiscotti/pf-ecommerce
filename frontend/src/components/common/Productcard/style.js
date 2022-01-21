import styled from "styled-components";

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 45%;
  height: 200px;
  margin: 0.5rem;

  img {
    background-size: contain;
    height: 200px;
    object-fit: contain;
  }
`;
