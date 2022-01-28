import styled from "styled-components";
import { formCard } from "../utils/utilsMixins";

export const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .formSignup {
    ${formCard};
    label {
      font-weight: 400;
      text-transform: uppercase;
      font-size: 13px;
      padding-left: 5px;
      padding-bottom: 10px;
      color: rgba(255, 255, 255, 0.7);
      display: block;
      .errorHelp {
        display: flex;
        align-items: center;
        text-transform: none;
        color: tomato;
        span {
          margin-left: 5px;
        }
      }
    }
    .formStyling {
      color: white;
      width: 100%;
      height: 35px;
      padding-left: 15px;
      border: 0;
      border-radius: 5px;
      margin-bottom: 20px;
      background: rgba(255, 255, 255, 0.2);
      &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.5);
        color: white;
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
