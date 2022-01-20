import styled from 'styled-components';

export const StyledContainerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px 15px;
  @media (min-width: 768px) {
    flex: 2 43%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`