import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ bgColor }) => bgColor || "#16bcdc"};
  border: ${({ border }) => border || "none"};
  border-radius: ${({ radius }) => radius || "4px"};
  color: ${({ color }) => color || "#fff"};
  font-family: ${({ fontFamily }) => fontFamily || " sans-serif"};
  font-size: ${({ fontSize }) => fontSize || "1.3rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "bold"};
  padding: ${({ padding }) => padding || "5px"};
  text-transform: ${({ textTransform }) => textTransform || "uppercase"};
  width: ${({ width }) => width || "10rem"};
  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor || "#0695B1"};
    color: ${({ hoverColor }) => hoverColor || "#fff"};
  }
  cursor: pointer;
  transition: all 0.3s ease;
  line-height: 1;
`;
