import styled from "styled-components";

export const RowUserSc = styled.tr`
  text-align: center;
  .btnEdit {
    display: none;
    color: white;
    cursor: pointer;
  }
  .delete {
    cursor: pointer;
  }
  .edit {
    &:hover {
      .type {
        display: none;
      }
      .btnEdit {
        display: inline-block;
      }
    }
  }
`;
