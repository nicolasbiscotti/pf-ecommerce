import { css } from "styled-components";

export const mainBgcolor = "#263c97";
export const borderscolor = "rgba(255, 255, 255, 0.15)";
export const lightblue = "#0dcaf0";

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
