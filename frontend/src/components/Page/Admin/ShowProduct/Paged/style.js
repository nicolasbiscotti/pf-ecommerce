import styled from "styled-components";

export const PagedStyled = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    gap: 15px;
    li {
      a {
        padding: 10px;
      }
    }
  }
  .active {
    background-color: blue;
  }
`;
