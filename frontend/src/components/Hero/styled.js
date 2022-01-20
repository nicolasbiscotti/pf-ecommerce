import styled from "styled-components";
export const StyledHero = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  gap: 15px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`