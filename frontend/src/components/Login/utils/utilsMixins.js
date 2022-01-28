import { css } from "styled-components";
import { lightblue } from "./utilsColors";

export const flexColumnBody = css`
  display: flex;
  flex-direction: column;
  background: #ededed;
  font-size: 16px;
  padding: 0 !important;
  margin: 0;
  min-height: 100vh;
  height: auto;
  width: 100%;
  box-sizing: border-box;
`;

export const formCard = css`
  display: flex;
  flex-direction: column;
  min-height: 26rem;
  max-width: 32.5rem;
  margin: -6.875rem auto 0;
  opacity: 0.9;
  box-shadow: 0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.15);
  background-color: #373e64;
  padding-bottom: 0;
  padding: 4.5rem 4rem;
  text-align: left;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 300;
`;

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
