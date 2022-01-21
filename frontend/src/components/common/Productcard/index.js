import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import { ProductCardStyled } from "./style";

export default function ProductCard({ product }) {
  return (
    <ProductCardStyled>
      <Link className="containerProduct" to={`/detailts/${product.id}`}>
        <img src={product.mainImg} alt="img-product" />
      </Link>
      <h4>{product.name}</h4>
      <section>
        <h5>${product.salePrice}</h5>
        <Button width="60px">BUY</Button>
      </section>
    </ProductCardStyled>
  );
}

// {
//     "id": "d2bc0d4d-23a0-446a-93de-dc2d7d07f4e3",
//     "name": "Samsung Galaxy International Vs",
//     "salePrice": 1000,
//     "mainImg": "https://rubiktheme.com/demo/emarket_demo/97-home_default/mug-the-best-is-yet-to-come.jpg",
//     "discount": 0,
//     "categories": [
//         {
//             "id": 2,
//             "name": "mobile"
//         }
//     ]
// },
