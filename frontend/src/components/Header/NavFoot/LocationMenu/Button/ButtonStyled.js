import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  position: ${({ position }) => position || "static"};
  top: ${({ top }) => top || "auto"};
  left: ${({ left }) => left || "auto"};
  z-index: ${({ zindex }) => zindex || "auto"};
  &:hover {
    cursor: pointer;
  }
`;
