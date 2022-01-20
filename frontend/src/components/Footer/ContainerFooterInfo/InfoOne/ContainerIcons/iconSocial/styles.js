import styled from "styled-components";

export const IconStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || "#16bcdc"};
  width: 42px;
  height: 42px;
  color: #fff;
  font-size: 2.2rem;
  border-radius: 4px;
`;
