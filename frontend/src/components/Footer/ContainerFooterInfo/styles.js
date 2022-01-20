import styled from "styled-components";

export const ContainerFooterInfoStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;
