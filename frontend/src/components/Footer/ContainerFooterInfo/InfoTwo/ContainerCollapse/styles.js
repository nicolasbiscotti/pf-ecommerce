import styled from "styled-components";

export const ContainerCollapseStyled = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  @media screen and (min-width: 992px) {
    .items {
      margin: 2rem 0;
      padding: 0;
      display: flex;
    }
  }
`;
