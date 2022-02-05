import styled from "styled-components";

export const RowsStyled = styled.tr`
  text-align: center;
  .name {
    min-width: 170px;
  }
  a {
    display: none;
    color: white;
  }
  &:hover {
    .name {
      span {
        display: none;
      }
    }
    a {
      display: inline-block;
    }
  }
`;
