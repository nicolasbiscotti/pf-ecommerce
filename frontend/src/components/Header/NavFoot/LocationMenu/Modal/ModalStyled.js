import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  width: 8rem;
  height: 3rem;
  position: absolute;
  top: -1.5rem;
  left: -8rem;
  z-index: -1;
  &:hover {
    cursor: pointer;
  }
`;
