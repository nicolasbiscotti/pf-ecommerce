import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../../redux/reducers/products/actions";
import Spinner from "../Spinner";
import { StyledProductDetail } from "./styled";

export default function ProductDetail() {
  const { idProduct } = useParams();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const isLoading = useSelector((state) => state.products.isLoading);

  const loadProduct = () => dispatch(fetchProductDetail(idProduct));
  useEffect(loadProduct, []);

  const [imageShown, setImageShown] = useState("");
  const [quantity, setQuantity] = useState(1);

  const onSetImageShownHandler = (e) => {
    setImageShown(e.target.src);
  };

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
    <StyledProductDetail>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="mainProductWrapper">
          <div className="productLeftContent">
            <div className="producMainImage">
              <img
                src={imageShown ? imageShown : product.mainImg}
                alt="product main"
                className="mainImage"
              />
            </div>
            <div className="thumbsList">
              {product.images?.map((imageUrl, index) => (
                <img
                  onClick={onSetImageShownHandler}
                  className="thumbs"
                  key={index}
                  src={imageUrl}
                  alt="product alternative"
                />
              ))}
            </div>
          </div>
          <div className="productRigthContent">
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
                    <input type="text" className="display" value={quantity} />
                    <button
                      className="rigth touch"
                      type="button"
                      onClick={onAddQuantityHandler}
                    >
                      +
                    </button>
                  </div>
                  <button className="addCart">ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </StyledProductDetail>
  );
}
