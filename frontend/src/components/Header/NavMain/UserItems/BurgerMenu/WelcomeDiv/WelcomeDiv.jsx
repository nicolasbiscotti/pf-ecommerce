import React from "react";
import { WelcomeDivStyled } from "./WelcomeDivStyled";
import { BiUserCircle } from "react-icons/bi";

function WelcomeDiv({ username }) {
  return (
    <WelcomeDivStyled>
      <BiUserCircle />
      <div className="text">
        {username?.length > 0 ? (
          <div>
            <p>Welcome {username}</p>
          </div>
        ) : (
          <div>
            <p>Welcome</p>
            <p>
              Log in into your account to follow your order, favorites, etc.
            </p>
          </div>
        )}
      </div>
    </WelcomeDivStyled>
  );
}

export default WelcomeDiv;
