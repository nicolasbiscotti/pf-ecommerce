import styled from "styled-components";

export const StyledProductDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  color: #717171;
  padding: 1.1rem;
  background-color: #f7f7f7;
  .mainProductWrapper {
    flex: 1;
    display: flex;
    padding: 0.9375rem;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: #fff;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .mainProductWrapper {
      flex-direction: column;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .mainProductWrapper {
      flex-direction: column;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .mainProductWrapper {
      flex-direction: row;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .mainProductWrapper {
      flex-direction: row;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .mainProductWrapper {
      flex-direction: row;
    }
  }
`;
