import styled from "styled-components";

export const StyledImageGalery = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .producMainImage {
    .mainImage {
      height: 350px;
      object-fit: scale-down;
    }
  }
  .thumbsList {
    display: flex;
    .thumbs {
      max-width: 100px;
      height: 100px;
      object-fit: scale-down;
      margin-left: 5px;
      &:nth-child(1) {
        margin: 0;
      }
      &:hover {
        cursor: pointer;
        border: 1px solid gray;
      }
    }
  }
`;
