import styled from "styled-components";

export const CreateCategorieStyled = styled.div`
  color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Rubik", sans-serif;

  h2 {
    text-align: center;
    margin: 50px 0;
  }

  .mainCategories {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .categories {
    display: flex;
    justify-content: space-evenly;
    margin: 50px 0;
    order: 2;

    ul {
      min-width: 90vw;
    }

    ul li {
      padding: 10px;
      border: 1px solid #9d9d9d;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .addCategories {
    input {
      margin: 5px 0;
    }
  }
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    .mainCategories {
      width: 90%;
      align-items: stretch;
    }
    h2 {
      width: 95%;
      margin: 10px;
      text-align: left;
      padding-bottom: 10px;
      border-bottom: 1px solid #9d9d9d;
    }

    .categories {
      ul {
        min-width: 100%;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .mainCategories {
      width: 100%;
      padding: 3rem;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      .categories {
        flex: 1;
        order: -1;
        ul {
          min-width: 100%;
        }
      }

      .addCategories {
        flex: 1;
        margin-top: 50px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        align-self: flex-start;

        h3 {
          padding: 0 0 2rem 0;
        }
      }

      .addCategories form > div:first-child input {
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #9d9d9d;
      }

      .addCategories form > div:first-child input:focus {
        outline: none;
      }
    }
  }
`;
