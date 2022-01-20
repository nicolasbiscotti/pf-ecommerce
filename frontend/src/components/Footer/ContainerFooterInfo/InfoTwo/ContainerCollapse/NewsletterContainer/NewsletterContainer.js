import React from "react";
import { Newsletter } from "./Newsletter/Newsletter";
import { NewsletterContainerStyled } from "./styles";

export const NewsletterContainer = () => {
  return (
    <NewsletterContainerStyled>
      <h3>NEWSLETTER</h3>
      <p>
        You may unsubscribe at any moment. For that purpose, please find our
        contact info in the legal notice.
      </p>
      <Newsletter />
      <div className="containerCheck">
        <input type="checkbox" />
        <p>
          Enim quis fugiat consequat elit minim nisi eu occaecat occaecat
          deserunt aliquip nisi ex deserunt.
        </p>
      </div>
    </NewsletterContainerStyled>
  );
};
