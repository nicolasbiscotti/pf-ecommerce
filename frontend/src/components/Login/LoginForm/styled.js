import styled from "styled-components";

export const StyledLoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .formSignup {
    width: 50vw;
    background-color: #373e64;
    opacity: 0.9;
    padding: 5rem;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 300;
    padding-left: 37px;
    padding-right: 37px;
    label {
      font-weight: 400;
      text-transform: uppercase;
      font-size: 13px;
      padding-left: 15px;
      padding-bottom: 10px;
      color: rgba(255, 255, 255, 0.7);
      display: block;
    }
    .formStyling {
      color: white;
      width: 100%;
      height: 35px;
      padding-left: 15px;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
      background: rgba(255, 255, 255, 0.2);
      &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.5);
        color: white;
      }
    }
    .btnSignup {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 13px;
      text-align: center;
      color: #ffffff;
      padding: 8px 0;
      width: 100%;
      height: 35px;
      border: none;
      border-radius: 5px;
      margin-top: 23px;
      background-color: #16bcdc;
      &:hover {
        cursor: pointer;
        background-color: #0d6efd;
      }
    }
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .formSignup {
      width: 90vw;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .formSignup {
      width: 60vw;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .formSignup {
      width: 50vw;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .formSignup {
      width: 40vw;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .formSignup {
      width: 30vw;
    }
  }
`;
