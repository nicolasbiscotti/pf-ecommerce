import styled from 'styled-components';

export const StyledCategories = styled.section`
  margin: 20px 10px;
  /* display: flex; */
  /* flex-direction: row; */
  .categoriesContainer {

    display: grid;
    gap: 20px;
    grid-auto-rows: 160px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr) );
  }
`