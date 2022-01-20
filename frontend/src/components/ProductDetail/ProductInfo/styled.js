import styled from "styled-components";

export const StyledProductInfo = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  .productHeading {
    letter-spacing: 0.02em;
    font-family: "Rubik", sans-serif;
    font-size: 2rem;
    font-weight: 500;
    color: #222;
    text-transform: capitalize;
    text-align: start;
    margin-bottom: 7px;
    padding: 5px 0;
  }
  .productDetailRow {
    display: flex;
    flex-direction: column;
    .productPrice {
      font-size: 2rem;
      color: #16bcdc;
      font-weight: bold;
      line-height: normal;
      margin-bottom: 7px;
      padding: 5px 0;
    }
    .productAttributes {
      margin-bottom: 7px;
      padding: 5px 0;
      .attribute {
        max-width: 200px;
        display: flex;
        justify-content: space-around;
        label {
          flex: 1;
          font-weight: bold;
          color: #222;
        }
        span {
          flex: 1;
        }
      }
    }
    .productDescription {
      margin-bottom: 7px;
      padding: 5px 0;
      .descriptionText {
        text-transform: capitalize;
      }
    }
    .productQuantityWrapper {
      margin-bottom: 7px;
      padding: 5px 0;
      display: flex;

      .productQuantity {
        display: flex;
        flex: 1 1 auto;
        .quantityTouchSpin {
          flex: 1;
          display: flex;
          margin-right: 10px;
          border: 1px solid #717171;
          border-radius: 5px;
          .rigth {
            border-radius: 0px 5px 5px 0px / 0px 5px 5px 0px;
          }
          .left {
            border-radius: 5px 0px 0px 5px / 5px 0px 0px 5px;
          }
          .touch {
            border: none;
            padding: 15px;
            &:hover {
              cursor: pointer;
            }
          }
          .display {
            border: none;
            flex: 1 1 auto;
            width: 1%;
            text-align: center;
            &:focus {
              border: none;
            }
          }
        }
        .addCart {
          flex: 3;
          border: none;
          background-color: #16bcdc;
          color: white;
          border-radius: 5px;
          padding: 15px;
          &:hover {
            cursor: pointer;
            background-color: #0d6efd;
          }
        }
      }
    }
  }
`;
