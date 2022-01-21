import styled from "styled-components";

export const StyledCard = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    padding: 0;
    width: 100%;
    height: auto;
    max-width: ${({ maxWidth }) => maxWidth || "350px"};
    @media (min-width: 992px) {
      flex: 30%;
    }
  }
  .slideContent {
    position: absolute;
    color: white;
    font-size: 3rem;
    max-width: 60%;
    top: 10%;
    left: 10%;
    bottom: 10%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    .big {
      @media (min-width: 768px) {
        display:none;
      }
      @media (min-width: 992px) {
        display:block;
      }
    }
    .small {
      font-size: 2rem;
      @media (min-width: 992px) {
        display:none;
      }
    }
  }
  &:hover {
    background-blend-mode: lighten;
  }
`