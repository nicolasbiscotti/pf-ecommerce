import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../../../common/Productcard/index";
import { ViewcardStyled } from "./ViewCardStyled";

export default function Viewcards() {
  const products =
    useSelector((state) =>
      state.products.isLoading ? [] : state.products.products.products
    ) || [];

  if (products.length === 0) {
    return (
      <div>
        <h1>Don't have products</h1>
      </div>
    );
  } else {
    return (
      <ViewcardStyled>
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </ViewcardStyled>
    );
  }
}
