import styled from "styled-components"
export const StyledCard = styled.div`
  width: auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: teal;
  background-image: url(${({ imgsrc }) => imgsrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column-reverse; 
  align-items: center;
  padding: 2rem;
  grid-row: ${({ index }) => [0, 3].some(el => index === el) ? "2 span" : "1 span"}; 
  &:hover {
    background-blend-mode: soft-light;
  }
`