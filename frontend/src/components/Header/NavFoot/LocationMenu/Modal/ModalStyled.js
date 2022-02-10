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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalStyled = styled.div`
  .modal-styles {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 35vh;
    width: 50%;
    padding: 3rem;
    z-index: 1000;
    border-radius: 0.4rem;
    background-color: #fff;
    font-family: Helvetica;
    font-size: 1.7rem;
    .modal-container {
      display: flex;
      justify-content: space-between;
      div p {
        margin-bottom: 0.7rem;
      }
    }
  }
  .overlay-styles {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
`;
