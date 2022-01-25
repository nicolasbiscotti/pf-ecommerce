import styled from 'styled-components';

export const StyledCategories = styled.div`
  display: grid;
  gap: 20px;
  margin: 20px;
  grid-auto-rows: 160px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr) );
`