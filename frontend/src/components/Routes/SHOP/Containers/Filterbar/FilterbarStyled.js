import styled from "styled-components";

export const FilterbarStyled = styled.div`
  display: none;
  width: 28%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 20px;
  }
`;
