import { css } from "styled-components";
import { lightblue } from "./utilsColors";

export const flexSpacebetweenCenter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const hoverPointer = css`
  &:hover {
    cursor: pointer;
  }
`;

export const hoverPointerLightblue = css`
  &:hover {
    cursor: pointer;
    color: ${lightblue};
  }
`;
