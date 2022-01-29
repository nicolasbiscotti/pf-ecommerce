import styled from "styled-components";

export const SideBarContentStyled = styled.nav`
  z-index: 999;
  width: 250px;
  display: flex;
  font-family: "Rubik", sans-serif;
  position: fixed;
  nav {
    position: fixed;
    width: 250px;
    left: -250px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    background-color: #081f4c;
    flex-direction: column;
    transition: all 0.5s linear;
  }

  nav.active {
    left: 0;
  }

  .topSidebar {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    margin-top: 50px;
    .user {
      font-size: 5rem;
    }
  }

  .bar {
    position: absolute;
    top: 20px;
    left: 0;
    order: 2;
    font-size: 3rem;
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.5s linear;
  }
  .bar.active {
    left: 250px;
  }

  .containerLinks {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
  }

  a {
    padding: 10px;
    display: block;
    color: #fff;
  }
  .hvr-bounce-to-right {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
  }
  .hvr-bounce-to-right:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #16bcdc;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-bounce-to-right:hover,
  .hvr-bounce-to-right:focus,
  .hvr-bounce-to-right:active {
    color: white;
  }
  .hvr-bounce-to-right:hover:before,
  .hvr-bounce-to-right:focus:before,
  .hvr-bounce-to-right:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  }

  .signOut {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    margin-bottom: 6rem;
  }
  @media screen and (min-width: 768px) {
    nav {
      position: static;
    }
    .bar {
      display: none;
    }
  }
`;
