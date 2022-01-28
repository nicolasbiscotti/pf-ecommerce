import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: #ffffff;
  padding: 8px 0;
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 5px;
  margin-top: 23px;
  background-color: ${(props) => props.backgroundcolor || "#16bcdc"};
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.backgroundcolor ? "rgba(255, 255, 255, 0.5)" : "#0d6efd"};
  }
  &:disabled {
    cursor: not-allowed;
  }

  .iconTextButton {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      margin-right: 10px;
    }
  }
`;
