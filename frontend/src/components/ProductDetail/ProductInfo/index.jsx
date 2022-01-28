import { useState } from "react";
import { StyledProductInfo } from "./styled";
import AddtoCart from "../../common/addToCard";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);

  const onAddQuantityHandler = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  const onSubtractQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <StyledProductInfo>
      <h1 className="productHeading">{product.name}</h1>
      <div className="productDetailRow">
        <h1 className="productPrice">${product.salePrice}</h1>
        <div className="productAttributes">
          <div className="attribute">
            <label>Reference</label>
            <span>some text</span>
          </div>
          <div className="attribute">
            <label>Categories</label>
            {product.categories?.map((category) => (
              <span key={category.id}>{category.name}</span>
            ))}
          </div>
          <div className="attribute">
            <label>In stock</label>
            <span>{product.stock}</span>
          </div>
        </div>
        <div className="productDescription">
          <p className="descriptionText">{product.description}</p>
        </div>
        <div className="productQuantityWrapper">
          <div className="productQuantity">
            <div className="quantityTouchSpin">
              <button
                className="left touch"
                type="button"
                onClick={onSubtractQuantityHandler}
              >
                -
              </button>
              <input
                type="text"
                className="display"
                onChange={() => {}}
                value={quantity}
              />
              <button
                className="rigth touch"
                type="button"
                onClick={onAddQuantityHandler}
              >
                +
              </button>
            </div>
            <AddtoCart product={product} className="addCart" />
          </div>
        </div>
      </div>
    </StyledProductInfo>
  );
}
