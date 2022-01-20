import React from "react";
import { NewsLetterStyled } from "./styles";

export const Newsletter = () => {
  return (
    <NewsLetterStyled>
      <input type="text" placeholder="Your email address" />
      <button>SUBSCRIBE</button>
    </NewsLetterStyled>
  );
};
