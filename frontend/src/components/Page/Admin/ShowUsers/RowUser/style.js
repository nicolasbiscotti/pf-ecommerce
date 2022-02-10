import styled from "styled-components";

export const RowUserSc = styled.tr`
  text-align: center;
  .btnEdit {
    display: none;
    color: white;
  }
  &:hover {
    .type {
      display: none;
    }
    .btnEdit {
      display: inline-block;
    }
  }
`;
