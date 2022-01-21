import React from "react";
import { Link } from "react-router-dom";
import { ProductCardStyled } from "./style";

export default function ProductCard({ product }) {
  return (
    <Link className="containerProduct" to={`/detailts/${product.id}`}>
      <ProductCardStyled>
        <img src={product.mainImg} alt="img-product" />
        <h4>{product.name}</h4>
        <section>
          <h5>${product.salePrice}</h5>
          <button>BUY</button>
        </section>
      </ProductCardStyled>
    </Link>
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
