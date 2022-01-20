import styled from "styled-components";

export const StyledCard = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    padding: 0;
    width: 100%;
    height: auto;
    max-width: ${({ maxWidth }) => maxWidth || "350px"};
    @media (min-width: 992px) {
      flex: 30%;
    }
  }
`