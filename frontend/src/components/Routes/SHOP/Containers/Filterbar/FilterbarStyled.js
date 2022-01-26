import styled from "styled-components";

export const FilterbarStyled = styled.div`
  position: absolute;
  left: ${props=>props.isVisible?'0%':'-80%'};
  transition: left 0.7s;
  display: ${props=>props.isVisible?'flex':'none'};
  flex-direction: ${props=>props.isVisible?'column':'none'};

  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 20px;
    width: 28%;
    left: 0%;
  }
`;
