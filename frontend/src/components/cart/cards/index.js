import React from "react";
import { CardsStyled } from "./cardstyled";
import Card from "./card/index";

const Cards = function ({ products }) {
  return (
    <CardsStyled>
      {products.map((p) => (
        <Card key={p.idProduct} {...p} />
      ))}
    </CardsStyled>
  );
};

export default Cards;
