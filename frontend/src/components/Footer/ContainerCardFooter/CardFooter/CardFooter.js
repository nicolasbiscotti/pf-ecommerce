import React from "react";
import { CardFoot } from "./styles";

export const CardFooter = ({ icon, title, description }) => {
  return (
    <>
      <CardFoot>
        {icon}
        <div className="cardText">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </CardFoot>
    </>
  );
};
